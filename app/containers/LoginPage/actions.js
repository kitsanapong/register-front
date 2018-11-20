/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, REGISTER } from './constants';

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