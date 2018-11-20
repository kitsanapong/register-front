import { fromJS } from 'immutable';
import loginPageReducer from '../reducer';
import { RegisterFailed, RegisterRequest } from '../actions'

describe('loginPageReducer', () => {
  it('returns the initial state', () => {
    expect(loginPageReducer(undefined, {})).toEqual(fromJS({
      registerError: {},
      requestingRegister: false,
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
  it('set registerError', () => {
    const err = {
      message: 'This is Error',
    }
    const action = RegisterFailed({ err })
    expect(loginPageReducer(undefined, action).toJS().registerError)
    .toEqual(err)
  })
});
