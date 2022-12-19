import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_USER_INFO, UPDATE_USER_INFO} from 'redux/actions/actionTypes';
import {getProfileInfo, updateProfileInfo} from 'services/user.service';
import {
  fetchProfileFailed,
  fetchProfileSuccess,
  updateProfileFailed,
  updateProfileSuccess,
} from 'redux/actions/profile.actions';
import {reduxHelper} from 'redux/utils/reduxHelper';

const onGetProfile = function* ({payload: query}) {
  try {
    const response = yield call(getProfileInfo, query);
    yield put(fetchProfileSuccess(response));
  } catch (error) {
    yield put(fetchProfileFailed(error.response));
  }
};
const onUpdateProfile = function* ({id, payload}) {
  try {
    const response = yield call(updateProfileInfo, id, payload);
    yield put(updateProfileSuccess(id, response));
  } catch (error) {
    yield put(updateProfileFailed(error.response));
  }
};

const ProfileSaga = function* () {
  yield takeLatest(reduxHelper(FETCH_USER_INFO).actionRequest, onGetProfile);
  yield takeLatest(
    reduxHelper(UPDATE_USER_INFO).actionRequest,
    onUpdateProfile,
  );
};

export default ProfileSaga;
