/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';

import request, { POSTOption, GETOption } from 'utils/request'
import { LOGOUT_URL } from 'utils/apis'

import homePageSaga, { LogoutSaga } from '../saga';

import { Logout, LogoutRequest, LogoutSucceed, LogoutFailed } from '../actions'

// const generator = homePageSaga();

describe('homePageSaga Saga', () => {
  describe('LogoutSaga', () => {
    it('should be defined', () => {
      expect(LogoutSaga).toBeDefined()
    })
    describe('Call', () => {
      let saga
      const action = Logout()
      saga = LogoutSaga(action)
      it('should put LogoutRequest', () => {
        expect(saga.next().value).toEqual(put(LogoutRequest()))
      })
      it('should call logout api', () => {
        const url = LOGOUT_URL
        const option = GETOption(action.payload)
        expect(saga.next().value).toEqual(call(request, url, option))
      })
      it('should put LogoutSucceed', () => {
        expect(saga.next().value).toEqual(put(LogoutSucceed()))
      })
      it('should put LogoutFailed', () => {
        const err = {}
        expect(saga.throw(err).value).toEqual(put(LogoutFailed({ err })))
      })
    })
  })
});
