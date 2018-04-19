import {
  GET_PIZZA_MENU_SUCCESS,
  GET_PIZZA_MENU_FAILED
} from '../actions/menuActions';
// import objectAssign from 'object-assign';

const initialState = {
  pizzaMenu: null,
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
    default:
      return state;
  }
};