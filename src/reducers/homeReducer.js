import {
  GET_HOME_INFO_SUCCESS,
  GET_HOME_INFO_FAILED
} from '../actions/homeActions';
// import objectAssign from 'object-assign';

const initialState = {
  homeInfo: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_HOME_INFO_SUCCESS:
      return {
        ...state,
        homeInfo: action.homeInfo
      };
    case GET_HOME_INFO_FAILED:
      return {
        ...state,
        title: action.error
      };
    default:
      return state;
  }
};