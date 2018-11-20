/*
 *
 * HomePage actions
 *
 */

import { LOGOUT, LOGOUT_REQUEST, LOGOUT_SUCCEED, LOGOUT_FAILED } from './constants';

export function Logout({ email, password }) {
  return {
    type: LOGOUT,
  }
}

export function LogoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  }
}

export function LogoutSucceed() {
  return {
    type: LOGOUT_SUCCEED,
  }
}

export function LogoutFailed({ err }) {
  return {
    type: LOGOUT_FAILED,
    err,
  }
}
