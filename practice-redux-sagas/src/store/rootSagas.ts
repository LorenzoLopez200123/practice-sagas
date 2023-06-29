import { all, fork } from 'redux-saga/effects';
import counterWatcher from '../modules/counterModule/counterSaga';
import messageWatcherSaga from '../modules/messageModule/messageSaga';

export default function* rootSaga() {
  yield all([
    fork(counterWatcher),
    fork(messageWatcherSaga)
    // fork(contactSagas),
    // fork(profileSagas),
    // fork(resumesSagas),
    // fork(jobsSagas),
    // fork(pagesSagas),
    // fork(marketplaceSagas),
    // fork(articleCategories),
    // fork(forumSagas),
    // fork(eventsSagas),
    // fork(offersSagas),
    // fork(searchSagas),
  ]);
}