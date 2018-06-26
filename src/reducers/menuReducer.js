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
  GET_SIDE_MENU_SUCCESS,
  GET_SIDE_MENU_FAILED,
  GET_DESSERT_MENU_SUCCESS,
  GET_DESSERT_MENU_FAILED,
  GET_DRINK_MENU_SUCCESS,
  GET_DRINK_MENU_FAILED,
  GET_SOUP_MENU_SUCCESS,
  GET_SOUP_MENU_FAILED,
  GET_COMBO_MENU_SUCCESS,
  GET_COMBO_MENU_FAILED
} from '../actions/menuActions';
// import objectAssign from 'object-assign';

const initialState = {
  pizzaMenu: null,
  pizzaOptions: null,
  pizzaDetail: null,
  showPizzaDialog: false,
  riceMenu: null,
  sideMenu: null,
  dessertMenu: null,
  drinkMenu: null,
  soupMenu: null,
  comboMenu: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZA_MENU_SUCCESS:
      return {
        ...state,
        pizzaMenu: action.pizzaMenu,
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
      };
    case GET_PIZZA_DETAIL_FAILED:
      return {
        ...state,
        error: action.error
      };
    case CONTROL_PIZZA_DIALOG:
      return {
        ...state,
        showPizzaDialog: !state.showPizzaDialog,
      };
    case GET_RICE_MENU_SUCCESS:
      return {
        ...state,
        riceMenu: action.riceMenu,
      };
    case GET_RICE_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_SIDE_MENU_SUCCESS:
      return {
        ...state,
        sideMenu: action.sideMenu,
      };
    case GET_SIDE_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_DESSERT_MENU_SUCCESS:
      return {
        ...state,
        dessertMenu: action.dessertMenu,
      };
    case GET_DESSERT_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_DRINK_MENU_SUCCESS:
      return {
        ...state,
        drinkMenu: action.drinkMenu,
      };
    case GET_DRINK_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_SOUP_MENU_SUCCESS:
      return {
        ...state,
        soupMenu: action.soupMenu,
      };
    case GET_SOUP_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_COMBO_MENU_SUCCESS:
      return {
        ...state,
        comboMenu: action.comboMenu,
      };
    case GET_COMBO_MENU_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};