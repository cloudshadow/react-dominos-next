import 'es6-promise/auto'; //import es6-promise for ie
import axios from 'axios';
import urlHelper from '../utils/urlHelper';
import history from '../utils/history';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export function login(email, password) {
  console.log(email);
  console.log(password);
  return dispatch => {
    axios.get(urlHelper.t('v1/login'), {
      // axios.post(urlHelper.t('login'), {
      email: email,
      password: password
    }).then(response => {
      const { data: user } = response;
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: LOGIN_SUCCESS, user });
      history.push('/');
    }).catch(error => {
      if (error.response.status >= 400 && error.response.status !== 401) {
        dispatch({ type: LOGIN_FAILED, error: error.response.statusText });
      }
    });
  };
}

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export function signup(username, password) {
  return dispatch => {
    // axios.get(urlHelp.t('login'), {
    axios.post(urlHelper.t('signup'), {
      username: username,
      password: password
    }).then(response => {
      history.push('/');
    }).catch(error => {
      if (error.response.status >= 400 && error.response.status !== 401) {
        dispatch({ type: SIGN_UP_FAILED, error: error.response.statusText });
      }
    });
  };
}

// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
// export const GET_USER_FAILED = 'GET_USER_FAILED';
// export function getUser() {
//   return dispatch => {
//     axios.get(urlHelper.t('users/current')).then(response => {
//       const { data: user } = response;
//       localStorage.setItem('user', JSON.stringify(user));
//       dispatch({ type: GET_USER_SUCCESS, user });
//     });
//   };
// }

export const RELOAD_AUTH = 'RELOAD_AUTH';
export function reloadAuth() {
  return dispatch => {
    const user = JSON.parse(localStorage.user);
    user ? dispatch({ type: RELOAD_AUTH, user }) : dispatch(push('/login'));
  };
}

export const LOGOUT = 'LOGOUT';
export function logout() {
  // localStorage.removeItem('token');
  localStorage.removeItem('user');
  return dispatch => {
    dispatch({ type: LOGOUT });
    history.push('/');
  };
}

export const SET_LANGUAGE = 'SET_LANGUAGE';
export function setLanguage(language) {
  return dispatch => {
    localStorage.removeItem('language');
    localStorage.setItem('language', language);
    dispatch({ type: SET_LANGUAGE, language });
  };
}

export const CONTROL_MSG_TIP = 'CONTROL_MSG_TIP';
export function controlMsgTip() {
  return dispatch => {
    dispatch({ type: CONTROL_MSG_TIP });
  };
}

