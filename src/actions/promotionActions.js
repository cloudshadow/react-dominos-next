import 'es6-promise/auto'; //import es6-promise for ie
import axios from 'axios';
import urlHelper from '../utils/urlHelper';
import history from '../utils/history';

export const TEMP = 'TEMP';

export const GET_PROMOTION_SUCCESS = 'GET_PROMOTION_SUCCESS';
export const GET_PROMOTION_FAILED = 'GET_PROMOTION_FAILED';
export function getPromotions() {
  return dispatch => {
    axios.get(urlHelper.t('v1/promotion')).then(response => {
      const { data: promotions } = response;
      dispatch({ type: GET_PROMOTION_SUCCESS, promotions });
    }).catch(error => {
      dispatch({ type: GET_PROMOTION_FAILED, error });
      history.push('/error');
    });
  };
}