import { fromJS } from 'immutable';
import loginPageReducer from '../reducer';
import { RegisterFailed } from '../actions'

describe('loginPageReducer', () => {
  it('returns the initial state', () => {
    expect(loginPageReducer(undefined, {})).toEqual(fromJS({
      registerError: {},
    }));
  });
  it('set registerError', () => {
    const err = {
      message: 'This is Error',
    }
    const action = RegisterFailed({ err })
    expect(loginPageReducer(undefined, action).toJS().registerError)
    .toEqual(err)
  })
});
