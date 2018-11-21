/*
 *
 * HomePage actions
 *
 */

import { LOGOUT, LOGOUT_REQUEST, LOGOUT_SUCCEED, LOGOUT_FAILED, GET_USER, GET_USER_REQUEST, GET_USER_SUCCEED, GET_USER_FAILED } from './constants';

export function Logout() {
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

export function GetUser() {
  return {
    type: GET_USER,
  }
}

export function GetUserRequest() {
  return {
    type: GET_USER_REQUEST,
  }
}

export function GetUserSucceed({ email, username }) {
  return {
    type: GET_USER_SUCCEED,
    payload: {
      username: username,
      email: email,
    }
  }
}

export function GetUserFailed({ err }) {
  return {
    type: GET_USER_FAILED,
    err,
  }
}
