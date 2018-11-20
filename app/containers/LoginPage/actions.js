/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, REGISTER, REGISTER_REQUEST } from './constants';

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