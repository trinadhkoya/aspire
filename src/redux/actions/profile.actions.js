import {FETCH_USER_INFO, UPDATE_USER_INFO} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/reduxHelper';

const fetchProfileRequest = query => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionRequest,
    payload: query,
  };
};

const fetchProfileSuccess = res => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionSuccess,
    payload: res,
  };
};

const fetchProfileFailed = error => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionFailure,
    payload: error,
  };
};

const updateProfileRequest = (id, newUpdate) => {
  return {
    type: reduxHelper(UPDATE_USER_INFO).actionRequest,
    payload: newUpdate,
    id: id,
  };
};

const updateProfileFailed = error => {
  return {
    type: reduxHelper(UPDATE_USER_INFO).actionFailure,
    payload: error,
  };
};

const updateProfileSuccess = (id, newUpdate) => {
  return {
    type: reduxHelper(UPDATE_USER_INFO).actionSuccess,
    payload: newUpdate,
    updateFinished: true,
    id: id,
  };
};

export {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailed,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailed,
};
