import { combineReducers } from 'redux';
import homeState from './homeReducer';
import menuState from './menuReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  homeState,
  menuState,
  router: routerReducer
});

export default rootReducer;
