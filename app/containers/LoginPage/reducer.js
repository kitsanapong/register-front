/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, REGISTER_REQUEST } from './constants';
import { REGISTER_FAILED } from './constants';

export const initialState = fromJS({
  registerError: {},
  requestingRegister: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILED:
      return state.set('registerError', action.err)
    case REGISTER_REQUEST:
      return state.set('requestingRegister', true)
        .set('registerError', {})
    default:
      return state;
  }
}

export default loginPageReducer;
