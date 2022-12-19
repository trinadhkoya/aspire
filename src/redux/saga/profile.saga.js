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

function* onGetProfile({payload: query}) {
  try {
    const response = yield call(getProfileInfo, query);
    yield put(fetchProfileSuccess(response));
  } catch (error) {
    yield put(fetchProfileFailed(error.response));
  }
}
function* onUpdateProfile({id, payload}) {
  try {
    const response = yield call(updateProfileInfo, id, payload);
    yield put(updateProfileSuccess(response));
  } catch (error) {
    yield put(updateProfileFailed(error.response));
  }
}

function* ProfileSaga() {
  yield takeLatest(reduxHelper(FETCH_USER_INFO).actionRequest, onGetProfile);
  yield takeLatest(
    reduxHelper(UPDATE_USER_INFO).actionRequest,
    onUpdateProfile,
  );
}

export default ProfileSaga;
