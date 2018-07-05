import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  RELOAD_AUTH,
  GET_ADDRESS_BOOK_SUCCESS,
  GET_ADDRESS_BOOK_FAILED
} from '../actions/userActions';
// import objectAssign from 'object-assign';

const initialState = {
  user: null,
  addressBook: null,
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
        user: action.user
      };
    case LOGOUT:
      return {
        ...initialState
      };
    case GET_ADDRESS_BOOK_SUCCESS:
      return {
        ...state,
        addressBook: action.addressBook,
      };
    case GET_ADDRESS_BOOK_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};