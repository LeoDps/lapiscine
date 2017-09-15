/* @flow */

import type { Store as ReduxStore } from 'redux'

export type Home = {
  readyStatus: string,
  err: any,
  data: Array<Object>,
};

export type Reducer = {
  home: Home,
  router: any,
}

export type Action =
  { type: 'DATA_REQUESTING' } |
  { type: 'DATA_SUCCESS', data: Array<Object> } |
  { type: 'DATA_FAILURE', err: any }

export type Store = ReduxStore<Reducer, Action>;
// eslint-disable-next-line no-use-before-define
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>
