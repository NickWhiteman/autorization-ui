import {
    put,
    all,
    call,
    takeLatest,
    select,
  } from 'redux-saga/effects';

import { 
    SING_IN_LISTENER, 
    SING_UP_LISTENER, 
    UPDATE_LISTENER 
} from '../action-type';

/*
*   root saga
*/

export function* AuthRootSaga() {
    yield all([
        singInWatcher(),
        singUpWatcher(),
        updateWatcher(),
    ]);
}

/*
*   watchers saga
*/

function* singInWatcher() {
    yield takeLatest(SING_IN_LISTENER, singInWorker);
}

function* singUpWatcher() {
    yield takeLatest(SING_UP_LISTENER, singUpWorker);
}

function* updateWatcher() {
    yield takeLatest(UPDATE_LISTENER, updateWorker);
}

/*
*   workers saga
*/
function* singInWorker() {

}

function* singUpWorker() {

}

function* updateWorker() {

}
