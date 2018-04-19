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