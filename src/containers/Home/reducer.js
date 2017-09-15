/* @flow */

import _ from 'lodash'

import {
  DATA_INVALID,
  DATA_REQUESTING,
  DATA_FAILURE,
  DATA_SUCCESS,
} from './action'
import type { Home, Action } from '../../types'

type State = Home;

const initialState = {
  readyStatus: DATA_INVALID,
  err: null,
  data: [],
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case DATA_REQUESTING:
      return _.assign({}, state, { readyStatus: DATA_REQUESTING })
    case DATA_FAILURE:
      return _.assign({}, state, {
        readyStatus: DATA_FAILURE,
        err: action.err,
      })
    case DATA_SUCCESS:
      return _.assign({}, state, {
        readyStatus: DATA_SUCCESS,
        data: action.data,
      })
    default:
      return state
  }
}
