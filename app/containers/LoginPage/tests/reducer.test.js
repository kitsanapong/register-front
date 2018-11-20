import { fromJS } from 'immutable';
import loginPageReducer from '../reducer';
import { RegisterFailed } from '../actions'

describe('loginPageReducer', () => {
  it('returns the initial state', () => {
    expect(loginPageReducer(undefined, {})).toEqual(fromJS({
      registerError: {},
    }));
  });
});
