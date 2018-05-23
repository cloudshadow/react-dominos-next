import 'es6-promise/auto'; //import es6-promise for ie
import axios from 'axios';
import urlHelper from '../utils/urlHelper';
import { push } from 'react-router-redux';

export const GET_PIZZA_MENU_SUCCESS = 'GET_PIZZA_MENU_SUCCESS';
export const GET_PIZZA_MENU_FAILED = 'GET_PIZZA_MENU_FAILED';
export function getPizzaMenu() {
  return dispatch => {
    axios.get(urlHelper.t('v1/pizza')).then(response => {
      const { data: pizzaMenu } = response;
      dispatch({ type: GET_PIZZA_MENU_SUCCESS, pizzaMenu });
    }).catch(error => {
      dispatch({ type: GET_PIZZA_MENU_FAILED, error });
      dispatch(push('/error'));
    });
  };
}

export const GET_PIZZA_OPTIONS_SUCCESS = 'GET_PIZZA_OPTIONS_SUCCESS';
export const GET_PIZZA_OPTIONS_FAILED = 'GET_PIZZA_OPTIONS_FAILED';
export function getPizzaOptions() {
  return dispatch => {
    axios.get(urlHelper.t('v1/pizza/options')).then(response => {
      const { data: pizzaOptions } = response;
      dispatch({ type: GET_PIZZA_OPTIONS_SUCCESS, pizzaOptions });
    }).catch(error => {
      dispatch({ type: GET_PIZZA_OPTIONS_FAILED, error });
      dispatch(push('/error'));
    });
  };
}

export const GET_PIZZA_DETAIL_SUCCESS = 'GET_PIZZA_DETAIL_SUCCESS';
export const GET_PIZZA_DETAIL_FAILED = 'GET_PIZZA_DETAIL_FAILED';
export function getPizzaDetail(id) {
  return dispatch => {
    axios.get(urlHelper.t('v1/pizza/' + id + '/detail')).then(response => {
      const { data: pizzaDetail } = response;
      dispatch({ type: GET_PIZZA_DETAIL_SUCCESS, pizzaDetail });
    }).catch(error => {
      dispatch({ type: GET_PIZZA_DETAIL_FAILED, error });
      dispatch(push('/error'));
    });
  };
}

export const CONTROL_PIZZA_DIALOG = 'CONTROL_PIZZA_DIALOG';
export function controlPizzaDialog() {
  return dispatch => {
    dispatch({ type: CONTROL_PIZZA_DIALOG });
  };
}

export const GET_RICE_MENU_SUCCESS = 'GET_RICE_MENU_SUCCESS';
export const GET_RICE_MENU_FAILED = 'GET_RICE_MENU_FAILED';
export function getRiceMenu() {
  return dispatch => {
    axios.get(urlHelper.t('v1/rice')).then(response => {
      const { data: riceMenu } = response;
      dispatch({ type: GET_RICE_MENU_SUCCESS, riceMenu });
    }).catch(error => {
      dispatch({ type: GET_RICE_MENU_FAILED, error });
      dispatch(push('/error'));
    });
  };
}



