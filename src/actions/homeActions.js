import 'es6-promise/auto'; //import es6-promise for ie
import axios from 'axios';
import urlHelper from '../utils/urlHelper';
import { push } from 'react-router-redux';

// export const GET_HOME_TITLE = 'GET_HOME_TITLE';
// // example of a thunk using the redux-thunk middleware
// export function getTitle() {
//   return dispatch => {
//     axios.get(urlHelper.t('title')).then(response => {
//       const { data: title } = response;
//       dispatch({ type: GET_HOME_TITLE, title });
//     });
//   };
// }

export const GET_HOME_INFO_SUCCESS = 'GET_HOME_INFO_SUCCESS';
export const GET_HOME_INFO_FAILED = 'GET_HOME_INFO_FAILED';
export function getHomeInfo() {
  return dispatch => {
    axios.get(urlHelper.t('v1/home')).then(response => {
      const { data: homeInfo } = response;
      dispatch({ type: GET_HOME_INFO_SUCCESS, homeInfo });
    }).catch(error => {
      dispatch({ type: GET_HOME_INFO_FAILED, error });
      dispatch(push('/error'));
    });
  };
}