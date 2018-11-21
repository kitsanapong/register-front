/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, GET_USER_SUCCEED, LOGOUT_SUCCEED } from './constants';

export const initialState = fromJS({
  userData: undefined,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCEED:
      return state.set('userData', action.payload);
    case LOGOUT_SUCCEED:
      return state.set('userData', undefined)
    default:
      return state;
  }
}

export default homePageReducer;
