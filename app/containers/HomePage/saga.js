import { takeLatest, call, put, select } from 'redux-saga/effects';

import request, { POSTOption, GETOption } from 'utils/request'
import { LogoutRequest, LogoutSucceed, LogoutFailed, GetUserRequest, GetUserSucceed, GetUserFailed } from './actions';
import { LOGOUT_URL } from 'utils/apis'
import { LOGOUT, GET_USER } from './constants';
import { GET_USER_URL } from '../../utils/apis';

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

export function* GetUserSaga(action) {
  yield put(GetUserRequest())
  try {
    const url = GET_USER_URL
    const option = GETOption(action.payload)
    const res = yield call(request, url, option)
    yield put(GetUserSucceed({ ...res.user }))
  }
  catch (err) {
    yield put(GetUserFailed({ err }))
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(LOGOUT, LogoutSaga)
  yield takeLatest(GET_USER, GetUserSaga)
}
