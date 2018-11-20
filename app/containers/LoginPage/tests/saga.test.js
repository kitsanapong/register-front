/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';

import request, { POSTOption } from 'utils/request'
import { REGISTER_URL } from 'utils/apis'

import loginPageSaga, { RegisterSaga } from '../saga';
import {
  Register,
  RegisterRequest,
  RegisterSucceed,
  RegisterFailed,
} from '../actions'

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
        expect(saga.next().value).toEqual(put(RegisterSucceed()))
      })
      it('should put RegisterFailed', () => {
        const err = {}
        expect(saga.throw(err).value).toEqual(put(RegisterFailed({ err })))
      })
    })
  })
});
