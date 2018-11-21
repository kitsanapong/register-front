/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';

import request, { POSTOption } from 'utils/request'
import { REGISTER_URL, LOGIN_URL } from 'utils/apis'

import loginPageSaga, { RegisterSaga, LoginSaga } from '../saga';
import {
  Register,
  RegisterRequest,
  RegisterSucceed,
  RegisterFailed,
  Login,
  LoginRequest,
  LoginSucceed,
  LoginFailed,
} from '../actions'
import { requestXML } from '../../../utils/request';

const generator = loginPageSaga();

describe('loginPageSaga Saga', () => {
  describe('RegisterSaga', () => {
    it('should be defined', () => {
      expect(RegisterSaga).toBeDefined()
    })
    describe('Call', () => {
      let saga
      const action = Register({
        username: 'user',
        email: 'email',
        password: 'password',
      })
      saga = RegisterSaga(action)
      it('should put RegisterRequest', () => {
        expect(saga.next().value).toEqual(put(RegisterRequest()))
      })
      it('should call register api', () => {
        const url = REGISTER_URL
        const option = POSTOption(action.payload)
        expect(saga.next().value).toEqual(call(request, url, option))
      })
      it('should put RegisterSucceed', () => {
        const res = { success: true }
        expect(saga.next(res).value).toEqual(put(RegisterSucceed()))
      })
      it('should put RegisterFailed', () => {
        const err = {}
        expect(saga.throw(err).value).toEqual(put(RegisterFailed({ err })))
      })
    })
  })
  describe('LoginSaga', () => {
    it('should be defined', () => {
      expect(LoginSaga).toBeDefined()
    })
    describe('Call', () => {
      let saga
      const action = Login({
        email: 'email',
        password: 'password',
      })
      saga = LoginSaga(action)
      it('should put LoginRequest', () => {
        const res = { status: 200 }
        expect(saga.next(res).value).toEqual(put(LoginRequest()))
      })
      it('should call login api', () => {
        const url = LOGIN_URL
        const option = POSTOption(action.payload)
        const res = { status: 200 }
        expect(saga.next(res).value).toEqual(call(requestXML, url, option))
      })
      it('should put LoginFailed', () => {
        const err = {}
        expect(saga.throw(err).value).toEqual(put(LoginFailed({ err })))
      })
    })
  })
});
