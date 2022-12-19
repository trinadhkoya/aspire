import {all, fork} from 'redux-saga/effects';
import ProfileSaga from 'redux/saga/profile.saga';

const rootSaga = function* () {
  yield all([fork(ProfileSaga)]);
};
export default rootSaga;
