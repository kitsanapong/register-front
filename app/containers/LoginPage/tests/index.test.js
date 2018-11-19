import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import { LoginPage } from '../index';
import LoginForm from 'components/LoginForm'
import RegisterForm from 'components/RegisterForm'

describe('<LoginPage />', () => {
  it('have mode state', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    expect(wrapper.instance().state.mode).toBeDefined()
  })
  it('render LoginForm when mode is LOGIN_MODE', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    wrapper.instance().setState({ mode: 'LOGIN_MODE' })
    expect(wrapper.containsMatchingElement(<LoginForm />)).toEqual(true)
  })
  it('render LoginForm when mode is REGISTER_MODE', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    wrapper.instance().setState({ mode: 'REGISTER_MODE' })
    expect(wrapper.containsMatchingElement(<RegisterForm />)).toEqual(true)  })
});
