/* @flow */
import morgan from 'morgan'
import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import hpp from 'hpp'
import favicon from 'serve-favicon'
import React from 'react'
import ReactGA from 'react-ga'
import clearConsole from 'react-dev-utils/clearConsole'
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import flash from 'express-flash'
import emoji from 'node-emoji'
import winston from 'winston'
import fs from 'fs'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import chalk from 'chalk'
import requestIp from 'request-ip'
import RateLimit from 'express-rate-limit'

import createHistory from 'history/createMemoryHistory'
import configureStore from './../redux/store'
import Html from './../utils/Html'
import App from './../containers/App'
import routes from './../routes'
import { port, host, BLACKLIST } from './../config' //eslint-disable-line

const auth = require('http-auth')

// HTTP Auth
const basic = auth.basic({
  realm: 'La Piscine.gg',
}, (username, password, callback) => {
  callback(username === 'chartswarrior' && password === 'tothemoon')
})

const appDirectory = fs.realpathSync(process.cwd())
function resolveApp(relativePath) {
  return require('path').resolve(appDirectory, relativePath)
}

const useYarn = fs.existsSync(resolveApp('yarn.lock'))
const cli = useYarn ? 'yarn' : 'npm'
const isInteractive = process.stdout.isTTY
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const prerender = require('prerender-node').set('prerenderToken', '8pJankmoVsAqZRYWsJdtcxM2Rg4HaZ2k')

// IPs rate limiter
const limiter = new RateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
})

export default (app) => {
  // HTTP Auth handler
  if (process.env.NODE_PREPROD) {
    app.use(auth.connect(basic))
  }

  // Using helmet to secure Express with various HTTP headers
  app
    .use(helmet.frameguard())
    .use(helmet.xssFilter())
    .use(helmet.hidePoweredBy())
    .use(helmet.noSniff())

  // Prevent HTTP parameter pollution.
  app.use(hpp())

  // Common things
  app
    .use(compression())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(methodOverride())
    .set('trust proxy', 'loopback')
    .use(requestIp.mw())
    .use(limiter)

  if (!__DEV__) {
    // Check if IP is blacklisted (ONLY ON PRODUCTION)
    app.use((req, res, next) => {
      if (BLACKLIST.indexOf(req.clientIp) === -1) {
        next()
      } else {
        res.send('Your IP is blacklisted, please contact our support if you think it is an error')
      }
    })
  }

  // Use morgan for http request debug (only show error)
  app.use(morgan('dev', {
    skip: (req, res) => res.statusCode < 400,
  }))

  // Statics
  app
    .use(favicon(require('path').join(process.cwd(), './build/public/favicon.ico')))
    .use(express.static(require('path').join(process.cwd(), './build/public'), { maxAge: 120 }))

  // Static cache
  app.use((req, res, next) => {
    if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
      res.setHeader('Cache-Control', 'public, max-age=120')
    }
    next()
  })

  app.use(prerender.blacklisted(['./build/public']))

  app.use(flash())

  // Run express as webpack dev server
  if (__DEV__) {
    const webpack = require('webpack')
    const webpackConfig = require('../../tools/webpack/webpack.client.babel')

    const compiler = webpack(webpackConfig)
    compiler.plugin('invalid', () => {
      if (isInteractive) {
        clearConsole()
      }
      winston.info('Compiling...') // eslint-disable-line no-console
    })

    let isFirstCompile = true

    compiler.plugin('done', (stats) => {
      const messages = formatWebpackMessages(stats.toJson({}, true))
      const isSuccessful = !messages.errors.length && !messages.warnings.length
      const showInstructions = isSuccessful && (isInteractive || isFirstCompile)

      if (isSuccessful) {
        winston.info(chalk.green.bold('Compiled successfully!'))
      }

      if (showInstructions) {
        winston.info('The app is running at:')
        winston.info(chalk.cyan.bold(`${protocol}://${host}:${port}/`))
        winston.info('Note that the development build is not optimized.')
        winston.info(`To create a production build, use ${chalk.cyan(`${cli} start:production`)}.`)
        isFirstCompile = false
      }

      // If errors exist, only show errors.
      if (messages.errors.length) {
        winston.info(chalk.red.bold('Failed to compile.'))
        messages.errors.forEach((message) => {
          winston.info(message)
        })
      }

      // Show warnings if no errors were found.
      if (messages.warnings.length) {
        winston.warn(chalk.yellow('Compiled with warnings.'))
        messages.warnings.forEach((message) => {
          winston.info(message)
        })
        // Teach some ESLint tricks.
        winston.info('You may use special comments to disable some warnings.')
        winston.info(`Use ${chalk.yellow('// eslint-disable-next-line')} to ignore the next line.`)
        winston.info(`Use ${chalk.yellow('/* eslint-disable */')} to ignore all warnings in a file.`)
      }
    })

    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      noInfo: true,
      stats: 'errors-only',
    }))

    app.use(require('webpack-hot-middleware')(compiler))
  } else {
    if (isInteractive) {
      clearConsole()
    }
    winston.info(chalk.green('Starting the Express server... '))
    if (process.env.NODE_PREPROD) {
      winston.info(chalk.cyan('App is running on a pre-production server'))
    }
    winston.info(`ENV: ${process.env.NODE_ENV}`)
    winston.info(chalk.green.bold('Server successfully started! ') + emoji.get('raised_hands'))
  }

  // Register server-side rendering middleware
  app.get('*', (req, res) => {
    // Varnish
    res.header('Cache-Control', 'public, max-age=120')

    if (__DEV__) webpackIsomorphicTools.refresh() // eslint-disable-line no-undef

    const history = createHistory()
    history.listen((location) => {
      ReactGA.set({ page: location.pathname })
      ReactGA.pageview(location.pathname)
    })
    const store = configureStore(history)
    const renderHtml = (store, htmlContent) => { // eslint-disable-line no-shadow
      const html = renderToStaticMarkup(<Html store={store} htmlContent={htmlContent} />)

      return `<!doctype html>${html}`
    }

    // If __DISABLE_SSR__ = true, disable server side rendering
    if (__DISABLE_SSR__) { // eslint-disable-line no-undef
      res.send(renderHtml(store))
      return
    }

    // Load data on server-side
    const loadBranchData = () => {
      const promises = []

      routes.some((route) => {
        const match = matchPath(req.url, route)

        // $FlowFixMe: the params of pre-load actions are dynamic
        if (match && route.loadData) promises.push(route.loadData(store.dispatch, match.params))

        return match
      })

      return Promise.all(promises)
    }

    // Send response after all the action(s) are dispathed
    loadBranchData()
      .then(() => {
        // Setup React-Router server-side rendering
        const routerContext = {}
        const htmlContent = renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={routerContext}>
              <App />
            </StaticRouter>
          </Provider>,
        )

        // Check if the render result contains a redirect, if so we need to set
        // the specific status and redirect header and end the response
        if (routerContext.url) {
          res.status(301).setHeader('Location', routerContext.url)
          res.end()

          return
        }

        // Checking is page is 404
        const status = routerContext.status === '404' ? 404 : 200

        // Pass the route and initial state into html template
        res.status(status).send(renderHtml(store, htmlContent))
      })
      .catch((err) => {
        res.status(404).send('Not Found :(')

        winston.error(`Rendering routes error: ${err}`)
      })
  })
  if (process.env.PORT) {
    app.server.listen(port, host, (err) => {
      if (err) {
        winston.error(err)
        return
      }
      if (__DEV__) {
        winston.info(chalk.cyan('Starting the development server...'))
      } else {
        winston.info('The app is running at:')
        winston.info(chalk.cyan.bold(`${protocol}://${host}:${port}/`))
        winston.info("And it's ready to rumble!")
      }
    })
  } else {
    winston.error(chalk.red.bold('No PORT environment variable has been specified'))
  }
}
