import 'es6-promise/auto'; //import es6-promise for ie
import axios from 'axios';
import urlHelper from '../utils/urlHelper';
import history from '../utils/history';

export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILED = 'GET_CART_FAILED';
export function getCart() {
  return dispatch => {
    axios.get(urlHelper.t('v1/cartitems')).then(response => {

      // ==============code for test begin==============
      let items = JSON.parse(localStorage.getItem('cart'));
      dispatch({ type: DELETE_ITEM_SUCCESS, items });
      // ==============code for test end==============

      // const { data: items } = response;
      // dispatch({ type: GET_CART_SUCCESS, items });
    }).catch(error => {
      dispatch({ type: GET_CART_FAILED, error });
      // history.push('/error');
    });
  };
}

export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';
export function addItem(item) {
  return dispatch => {
    // axios.post(urlHelper.t('v1/cartitems'), { item }).then(response => {
    axios.get(urlHelper.t('v1/cartitems'), { item }).then(response => {

      // ==============code for test begin==============
      let items = localCartForTest(item, 'add');
      dispatch({ type: ADD_ITEM_SUCCESS, items });
      // ==============code for test end==============

      // const { data: items } = response;
      // dispatch({ type: ADD_ITEM_SUCCESS, items });
    }).catch(error => {
      dispatch({ type: ADD_ITEM_FAILED, error });
      // history.push('/error');
    });
  };
}

export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_FAILED = 'UPDATE_CART_FAILED';
export function updateCart(item) {
  return dispatch => {
    // axios.put(urlHelper.t('v1/cartitems/' + item.id), { item }).then(response => {
    axios.get(urlHelper.t('v1/cartitems'), { item }).then(response => {

      // ==============code for test begin==============
      let items = localCartForTest(item, 'update');
      dispatch({ type: UPDATE_CART_SUCCESS, items });
      // ==============code for test end==============

      // const { data: items } = response;
      // dispatch({ type: UPDATE_CART_SUCCESS, items });
    }).catch(error => {
      dispatch({ type: UPDATE_CART_FAILED, error });
      // history.push('/error');
    });
  };
}

export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILED = 'DELETE_ITEM_FAILED';
export function deleteItem(item) {
  return dispatch => {
    // axios.delete(urlHelper.t('v1/cartitems/' + item.id)).then(response => {
    axios.get(urlHelper.t('v1/cartitems'), { item }).then(response => {

      // ==============code for test begin==============
      let items = localCartForTest(item, 'delete');
      dispatch({ type: DELETE_ITEM_SUCCESS, items });
      // ==============code for test end==============

      // const { data: items } = response;
      // dispatch({ type: DELETE_ITEM_SUCCESS, items });
    }).catch(error => {
      dispatch({ type: DELETE_ITEM_FAILED, error });
      // history.push('/error');
    });
  };
}

export const CLEAN_CART_SUCCESS = 'CLEAN_CART_SUCCESS';
export const CLEAN_CART_FAILED = 'CLEAN_CART_FAILED';
export function cleanCart() {
  return dispatch => {
    // axios.delete(urlHelper.t('v1/cart')).then(response => {
    axios.get(urlHelper.t('v1/cartitems')).then(response => {

      // ==============code for test begin==============
      localStorage.removeItem('cart');
      dispatch({ type: CLEAN_CART_SUCCESS });
      // ==============code for test end==============

      // dispatch({ type: CLEAN_CART_SUCCESS });
    }).catch(error => {
      dispatch({ type: CLEAN_CART_FAILED, error });
      // history.push('/error');
    });
  };
}

export const GET_SUGGESTION_ITEMS_SUCCESS = 'GET_SUGGESTION_ITEMS_SUCCESS';
export const GET_SUGGESTION_ITEMS_FAILED = 'GET_SUGGESTION_ITEMS_FAILED';
export function getSuggestionItems() {
  return dispatch => {
    axios.get(urlHelper.t('v1/suggestionitems')).then(response => {
      const { data: suggestionItems } = response;
      dispatch({ type: GET_SUGGESTION_ITEMS_SUCCESS, suggestionItems });
    }).catch(error => {
      dispatch({ type: GET_SUGGESTION_ITEMS_FAILED, error });
      history.push('/error');
    });
  };
}

export const HIDE_MESSAGE_DIALOG = 'HIDE_MESSAGE_DIALOG';
export function hideMessageDialog() {
  return dispatch => {
    dispatch({ type: HIDE_MESSAGE_DIALOG });
  };
}

const localCartForTest = (item, option) => {
  // localStorage.removeItem('cart')
  let items = (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
  if (option === 'add') {
    items.push(item);
  } else if (option === 'update') {
    let targetIndex = items.findIndex(cartItem => cartItem.id === item.id);
    items.splice(targetIndex, 1, item);
  } else if (option === 'delete') {
    let targetIndex = items.findIndex(cartItem => cartItem.id === item.id);
    items.splice(targetIndex, 1);
  }
  localStorage.setItem('cart', JSON.stringify(items));
  return items;
};
