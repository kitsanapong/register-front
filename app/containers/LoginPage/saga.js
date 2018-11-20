import { takeLatest, call, put, select } from 'redux-saga/effects';

import request, { POSTOption } from 'utils/request'
import { REGISTER_URL, LOGIN_URL } from 'utils/apis'

import { RegisterRequest, RegisterSucceed, RegisterFailed, LoginRequest, LoginSucceed, LoginFailed } from './actions'
import { REGISTER, LOGIN } from './constants';

export function* RegisterSaga(action) {
  yield put(RegisterRequest())
  try {
    const url = REGISTER_URL
    const option = POSTOption(action.payload)
    yield call(request, url, option)
    yield put(RegisterSucceed())
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
    yield call(request, url, option)
    yield put(LoginSucceed())
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
