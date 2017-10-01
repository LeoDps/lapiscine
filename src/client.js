/* @flow */

import React from 'react'
import ReactGA from 'react-ga'
import { render, unmountComponentAtNode } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { hotjar } from 'react-hotjar'

import configureStore from './redux/store'
import { GA } from './config'

ReactGA.initialize(GA)
hotjar.initialize(642320, 5)

// Get initial state from server-side rendering
const initialState = window.__INITIAL_STATE__
const history = createHistory()

const historyListener = (location) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
}

history.listen(historyListener)
historyListener(window.location)

const store = configureStore(history, initialState)
const mountNode = document.getElementById('react-view')

const renderApp = () => {
  const App = require('./containers/App').default

  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    mountNode,
  )
}

// Enable hot reload by react-hot-loader
if (module.hot) {
  const reRenderApp = () => {
    try {
      renderApp()
    } catch (error) {
      const RedBox = require('redbox-react').default

      render(<RedBox error={error} />, mountNode)
    }
  }

  module.hot.accept('./containers/App', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(mountNode)
      reRenderApp()
    })
  })
}

renderApp()
