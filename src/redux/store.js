/* @flow */

import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import chalk from 'chalk'

import type { Store } from '../types'
import rootReducer from './reducers'

export default (history: Object, initialState: Object = {}): Store => {
  const middlewares = [
    thunk.withExtraArgument(axios),
    routerMiddleware(history),
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
    __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f,
  ]

  const store: Store = createStore(rootReducer, initialState, compose(...enhancers))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      try {
        const nextReducer = require('./reducers').default

        store.replaceReducer(nextReducer)
      } catch (error) {
        console.error(chalk.red(`==> 😭  Reducer hot reloading error ${error}`)) // eslint-disable-line no-console
      }
    })
  }

  return store
}
