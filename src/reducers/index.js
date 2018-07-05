import { combineReducers } from 'redux';
import homeState from './homeReducer';
import menuState from './menuReducer';
import promotionState from './promotionReducer';
import userState from './userReducer';
import cartState from './cartReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  homeState,
  menuState,
  promotionState,
  userState,
  cartState,
  router: routerReducer
});

export default rootReducer;
