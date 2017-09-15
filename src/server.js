/* @flow */
import http from 'http'
import express from 'express'
import winston from 'winston'

import { port, host, BLACKLIST, API } from './config' //eslint-disable-line

const startApp = require('./server/app').default

const LOGGERS = require('./utils/loggers')


if (!__DEV__) {
  process.on('uncaughtException', (err) => {
    winston.error(err.stack)
    console.trace(err) // eslint-disable-line
    LOGGERS.appError.error('Uncaught exception.', { error: err })
  })

  process.on('unhandledRejection', (err) => {
    winston.error(err.stack)
    console.trace(err) // eslint-disable-line
    LOGGERS.appError.error('Unhandled promise rejection.', { error: err })
  })
}

const app = express()
app.server = http.createServer(app)
app.server.timeout = 60000

startApp(app)
