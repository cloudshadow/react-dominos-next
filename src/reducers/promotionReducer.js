import {
  GET_PROMOTION_SUCCESS,
  GET_PROMOTION_FAILED
} from '../actions/promotionActions';
// import objectAssign from 'object-assign';

const initialState = {
  promotions: null,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROMOTION_SUCCESS:
      return {
        ...state,
        promotions: action.promotions
      };
    case GET_PROMOTION_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};