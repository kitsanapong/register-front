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
    expect(wrapper.find('#login-form').length).toEqual(1)
  })
  it('render RegisterForm when mode is REGISTER_MODE', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    wrapper.instance().setState({ mode: 'REGISTER_MODE' })
    expect(wrapper.find('#register-form').length).toEqual(1)
  })
  it('render LoginForm when mode by defalt', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    wrapper.instance().setState({ mode: 'XXXXXX' })
    expect(wrapper.find('#login-form').length).toEqual(1)
  })
  it('change mode to LOGIN_MODE when call gotoLogin', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    wrapper.instance().gotoLogin()
    expect(wrapper.instance().state.mode).toEqual('LOGIN_MODE')
  })
  it('change mode to REGISTER_MODE when call gotoLogin', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    wrapper.instance().gotoRegister()
    expect(wrapper.instance().state.mode).toEqual('REGISTER_MODE')
  })
});