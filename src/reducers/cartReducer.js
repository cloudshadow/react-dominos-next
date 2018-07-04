import {
  GET_CART_SUCCESS,
  GET_CART_FAILED,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILED,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILED,
  CLEAN_CART_SUCCESS,
  CLEAN_CART_FAILED,
  GET_SUGGESTION_ITEMS_SUCCESS,
  GET_SUGGESTION_ITEMS_FAILED,
  HIDE_MESSAGE_DIALOG
} from '../actions/cartActions';
// import objectAssign from 'object-assign';

const initialState = {
  items: null,
  suggestionItems: null,
  showMessageDialog: false,
  showMessageDialogType: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return {
        ...state,
        items: action.items,
      };
    case GET_CART_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: action.items,
        showMessageDialog: true,
        showMessageDialogType: 'addCartSuccess',
      };
    case ADD_ITEM_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        items: action.items,
      };
    case UPDATE_CART_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: action.items,
      };
    case DELETE_ITEM_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case CLEAN_CART_SUCCESS:
      return {
        ...state,
        items: null,
      };
    case CLEAN_CART_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case GET_SUGGESTION_ITEMS_SUCCESS:
      return {
        ...state,
        suggestionItems: action.suggestionItems,
      };
    case GET_SUGGESTION_ITEMS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case HIDE_MESSAGE_DIALOG:
      return {
        ...state,
        showMessageDialog: false,
        showMessageDialogType: null,
      };
    default:
      return state;
  }
};