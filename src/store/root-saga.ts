import { all, takeLatest } from "redux-saga/effects";
import { 
    sagaActions, 
    singInWorker, 
    singUpWorker, 
    updateWorker 
} from "./saga/saga";

export function* AuthRootSaga() {
    yield all([
        takeLatest(sagaActions.singIn.type, singInWorker),
        takeLatest(sagaActions.singUp.type, singUpWorker),
        takeLatest(sagaActions.update.type, updateWorker)
    ]);
}