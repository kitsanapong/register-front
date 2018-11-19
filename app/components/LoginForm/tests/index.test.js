import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import LoginForm from '../index';

describe('<LoginForm />', () => {
  it('have username input', () => {
    const wrapper = shallow(
      <LoginForm />
    )
    expect(wrapper.find('#username').length).toEqual(1)
  });
  it('have password input', () => {
    const wrapper = shallow(
      <LoginForm />
    )
    expect(wrapper.find('#password').length).toEqual(1)
  });
  it('call props.gotoRegister when click Sign Up', () => {
    const stub = jest.fn()
    const wrapper = shallow(
      <LoginForm
        gotoRegister={stub}
      />
    )
    wrapper.find('#go-register').simulate('click')
    expect(stub).toHaveBeenCalled()
  })
});
