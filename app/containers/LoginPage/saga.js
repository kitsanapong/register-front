import { takeLatest, call, put, select } from 'redux-saga/effects';

import request, { POSTOption } from 'utils/request'
import { REGISTER_URL } from 'utils/apis'

import { Register, RegisterRequest, RegisterSucceed, RegisterFailed } from './actions'

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

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(Register().type, RegisterSaga)
}
