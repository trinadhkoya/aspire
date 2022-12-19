import {FETCH_USER_INFO, UPDATE_USER_INFO} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/reduxHelper';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
  updateFinished: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case reduxHelper(FETCH_USER_INFO).actionRequest:
      return {
        ...state,
        isLoading: true,
      };
    case reduxHelper(FETCH_USER_INFO).actionSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case reduxHelper(FETCH_USER_INFO).actionFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case reduxHelper(UPDATE_USER_INFO).actionRequest:
      return {
        ...state,
        isLoading: true,
      };
    case reduxHelper(UPDATE_USER_INFO).actionSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        updateFinished: action.updateFinished,
      };
    case reduxHelper(UPDATE_USER_INFO).actionFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
