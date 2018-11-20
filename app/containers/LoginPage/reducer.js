/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';
import { REGISTER_FAILED } from './constants';

export const initialState = fromJS({
  registerError: {},
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILED:
      return state.set('registerError', action.err)
    default:
      return state;
  }
}

export default loginPageReducer;
