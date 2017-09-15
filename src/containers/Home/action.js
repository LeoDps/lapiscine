/* @flow */
import type {
  Dispatch,
  GetState,
  ThunkAction,
  Reducer,
} from '../../types'

export const DATA_INVALID = 'DATA_INVALID'
export const DATA_REQUESTING = 'DATA_REQUESTING'
export const DATA_FAILURE = 'DATA_FAILURE'
export const DATA_SUCCESS = 'DATA_SUCCESS'

export const DATA_URL = require('../../config/data.json')

// Export this for unit testing more easily
export const fetchData = (DATA: string = DATA_URL): ThunkAction =>
  (dispatch: Dispatch) => {
    dispatch({ type: DATA_REQUESTING })
    return dispatch({ type: DATA_SUCCESS, data: DATA })
  }

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchData = (state: Reducer): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true

  const home = state.home

  if (home.readyStatus === DATA_SUCCESS) return false // Preventing double fetching data

  return true
}

/* istanbul ignore next */
export const fetchDataIfNeeded = (): ThunkAction =>
  (dispatch: Dispatch, getState: GetState) => {
    /* istanbul ignore next */
    if (shouldFetchData(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchData())
    }

    /* istanbul ignore next */
    return null
  }
