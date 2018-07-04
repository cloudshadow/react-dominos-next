import {
  // LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  RELOAD_AUTH
} from '../actions/authActions';
// import objectAssign from 'object-assign';

const initialState = {
  user: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error
      };
    case RELOAD_AUTH:
      return {
        ...state,
        user: action.user,
        token: action.token
      };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};