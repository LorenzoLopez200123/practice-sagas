import { all, takeEvery } from "redux-saga/effects";
import { sendMessage as sendMessageAction, removeMessage as removeMessageAction } from "./messageSliceWithActions";
import { PayloadAction } from "@reduxjs/toolkit";

const messageAddSagaWatcher = function* () {
    yield console.log("messageEffect");
    yield takeEvery(sendMessageAction.type, messageEffect);
}

const messageEffect = function* (action: PayloadAction) {
    yield console.log("messageEffect effect", action);
}

const messageRemoveSagaWatcher = function* () {
    yield takeEvery(removeMessageAction.type, messageRemoveEffect);
}

const messageRemoveEffect = function* (action: PayloadAction) {
    yield console.log("messageRemoveEffect", action);
}

export default function* messageWatcherSaga() {
    yield all([
        messageAddSagaWatcher(),
        messageRemoveSagaWatcher()
    ])
}
