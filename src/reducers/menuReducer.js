import {
  GET_PIZZA_MENU_SUCCESS,
  GET_PIZZA_MENU_FAILED,
  GET_PIZZA_OPTIONS_SUCCESS,
  GET_PIZZA_OPTIONS_FAILED,
  GET_PIZZA_DETAIL_SUCCESS,
  GET_PIZZA_DETAIL_FAILED,
  CONTROL_PIZZA_DIALOG,
  GET_RICE_MENU_SUCCESS,
  GET_RICE_MENU_FAILED,
} from '../actions/menuActions';
// import objectAssign from 'object-assign';

const initialState = {
  pizzaMenu: null,
  pizzaOptions: null,
  pizzaDetail: null,
  showPizzaDialog: false,
  riceMenu: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZA_MENU_SUCCESS:
      return {
        ...state,
        pizzaMenu: action.pizzaMenu,
        token: action.token
      };
    case GET_PIZZA_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_PIZZA_OPTIONS_SUCCESS:
      return {
        ...state,
        pizzaOptions: action.pizzaOptions,
        token: action.token
      };
    case GET_PIZZA_OPTIONS_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_PIZZA_DETAIL_SUCCESS:
      return {
        ...state,
        pizzaDetail: action.pizzaDetail,
        token: action.token
      };
    case GET_PIZZA_DETAIL_FAILED:
      return {
        ...state,
        error: action.error
      };
    case CONTROL_PIZZA_DIALOG:
      return {
        ...state,
        showPizzaDialog: true,
      };
    case GET_RICE_MENU_SUCCESS:
      return {
        ...state,
        riceMenu: action.riceMenu,
        token: action.token
      };
    case GET_RICE_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};