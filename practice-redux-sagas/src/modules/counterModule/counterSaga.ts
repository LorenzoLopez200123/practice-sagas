import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import { increment as incrementAction } from "./counterSliceWithActions";
import { removeMessage, sendMessage } from "../messageModule/messageSliceWithActions";

const counterSaga = function* () {
    yield takeEvery(incrementAction, counterEffect);
}

const removeMessageEffect = function* () {
    yield delay(3000);
    yield put(removeMessage('message added'));
}

const counterEffect = function* () {
    yield put(sendMessage('message added'));
    yield call(removeMessageEffect)
}
export default function* counterWatcher() {
    yield all([
      counterSaga(),
    ]);
  }