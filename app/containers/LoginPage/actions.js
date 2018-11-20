/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, REGISTER, REGISTER_REQUEST, REGISTER_SUCCEED, REGISTER_FAILED, LOGIN, LOGIN_REQUEST } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function Register({ username, email, password }) {
  return {
    type: REGISTER,
    payload: {
      username,
      email,
      password,
    },
  }
}

export function RegisterRequest() {
  return {
    type: REGISTER_REQUEST,
  }
}

export function RegisterSucceed() {
  return {
    type: REGISTER_SUCCEED,
  }
}

export function RegisterFailed({ err }) {
  return {
    type: REGISTER_FAILED,
    err,
  }
}

export function Login({ email, password }) {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
    },
  }
}

export function LoginRequest() {
  return {
    type: LOGIN_REQUEST,
  }
}