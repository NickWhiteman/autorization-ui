import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from 'redux-saga/effects';

import { IAuthState } from './types';
import { authReducer } from './reducer';
import { AuthRootSaga } from "./root-saga";

export interface IRootState {
  AuthStore: IAuthState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    AuthStore: authReducer,
  }),
  undefined,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;

function* rootSaga() {
  yield all([
    AuthRootSaga()
  ]);
}
