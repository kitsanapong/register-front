import { takeLatest, call, put, select } from 'redux-saga/effects';

import request, { POSTOption } from 'utils/request'
import { LogoutRequest, LogoutSucceed, LogoutFailed } from './actions';
import { LOGOUT_URL } from 'utils/apis'
import { LOGOUT } from './constants';

export function* LogoutSaga(action) {
  yield put(LogoutRequest())
  try {
    const url = LOGOUT_URL
    const option = POSTOption(action.payload)
    yield call(request, url, option)
    yield put(LogoutSucceed())
  }
  catch (err) {
    yield put(LogoutFailed({ err }))
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(LOGOUT, LogoutSaga)
}
