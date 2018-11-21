import { fromJS } from 'immutable';
import loginPageReducer from '../reducer';
import { RegisterFailed, RegisterRequest, RegisterSucceed, LoginRequest, LoginSucceed, LoginFailed } from '../actions'

describe('loginPageReducer', () => {
  it('returns the initial state', () => {
    expect(loginPageReducer(undefined, {})).toEqual(fromJS({
      registerError: {},
      requestingRegister: false,
      loginError: {},
      requestingLogin: false,
    }));
  });
  it('RegisterRequest must clear state', () => {
    const action = RegisterRequest()
    const state = loginPageReducer(fromJS({
      registerError: { message: 'This is error' },
      requestingRegister: false,
    }), action).toJS()
    expect(state.requestingRegister).toEqual(true)
    expect(state.registerError).toEqual({})
  })
  it('RegisterSucceed must clear state', () => {
    const action = RegisterSucceed()
    const state = loginPageReducer(fromJS({
      requestingRegister: true,
    }), action).toJS()
    expect(state.requestingRegister).toEqual(false)
  })
  it('RegisterFailed set registerError', () => {
    const err = {
      message: 'This is Error',
    }
    const action = RegisterFailed({ err })
    expect(loginPageReducer(undefined, action).toJS().registerError)
    .toEqual(err)
  })
  it('LoginRequest must clear state', () => {
    const action = LoginRequest()
    const state = loginPageReducer(fromJS({
      loginError: { message: 'This is error' },
      requestingLogin: false,
    }), action).toJS()
    expect(state.requestingLogin).toEqual(true)
    expect(state.loginError).toEqual({})
  })
  it('LoginSucceed must clear state', () => {
    const action = LoginSucceed()
    const state = loginPageReducer(fromJS({
      requestingLogin: true,
    }), action).toJS()
    expect(state.requestingLogin).toEqual(false)
  })
  it('LoginFailed set loginError', () => {
    const err = {
      message: 'This is Error',
    }
    const action = LoginFailed({ err })
    expect(loginPageReducer(undefined, action).toJS().loginError)
    .toEqual(err)
  })
});
