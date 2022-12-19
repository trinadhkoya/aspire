import {FETCH_USER_INFO} from 'redux/actions/actionTypes';
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

export {fetchProfileRequest, fetchProfileSuccess, fetchProfileFailed};
