/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, REGISTER_REQUEST, REGISTER_SUCCEED, LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAILED } from './constants';
import { REGISTER_FAILED } from './constants';

export const initialState = fromJS({
  registerError: {},
  requestingRegister: false,
  loginError: {},
  requestingLogin: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILED:
      return state.set('registerError', action.err)
    case REGISTER_REQUEST:
      return state.set('requestingRegister', true)
        .set('registerError', {})
    case REGISTER_SUCCEED:
      return state.set('requestingRegister', false)
    case LOGIN_REQUEST:
      return state.set('requestingLogin', true)
        .set('loginError', {})
    case LOGIN_SUCCEED:
      return state.set('requestingLogin', false)
    case LOGIN_FAILED:
      return state.set('loginError', action.err)
        .set('requestingLogin', false)
    default:
      return state;
  }
}

export default loginPageReducer;
