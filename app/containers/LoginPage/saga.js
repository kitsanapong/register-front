import { takeLatest, call, put, select } from 'redux-saga/effects';

import request, { POSTOption } from 'utils/request'
import { REGISTER_URL, LOGIN_URL } from 'utils/apis'

import { RegisterRequest, RegisterSucceed, RegisterFailed, LoginRequest, LoginSucceed, LoginFailed } from './actions'
import { REGISTER, LOGIN } from './constants';
import { requestXML } from '../../utils/request';

export function* RegisterSaga(action) {
  yield put(RegisterRequest())
  try {
    const url = REGISTER_URL
    const option = POSTOption(action.payload)
    const res = yield call(request, url, option)
    if (res.success) {
      yield put(RegisterSucceed())
    } else {
      yield put(RegisterFailed({
        err: {...res.err}
      }))
    }
  }
  catch (err) {
    yield put(RegisterFailed({ err }))
  }
}

export function* LoginSaga(action) {
  yield put(LoginRequest())
  try {
    const url = LOGIN_URL
    const option = POSTOption(action.payload)
    const res = yield call(requestXML, url, option)
    if (res.status < 300) {
      yield put(LoginSucceed())
    } else {
      yield put(LoginFailed({
        err : {
          message: res.statusText,
          status: res.status,
        },
      }))
    }
  }
  catch (err) {
    yield put(LoginFailed({ err }))
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(REGISTER, RegisterSaga)
  yield takeLatest(LOGIN, LoginSaga)
}
