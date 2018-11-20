import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import RegisterForm from '../index';

describe('<RegisterForm />', () => {
  it('have Username', () => {
    const wrapper = shallow(
      <RegisterForm />
    )
    expect(wrapper.find('#username').length).toEqual(1)
  })
  it('have Email', () => {
    const wrapper = shallow(
      <RegisterForm />
    )
    expect(wrapper.find('#email').length).toEqual(1)
  })
  it('have Password', () => {
    const wrapper = shallow(
      <RegisterForm />
    )
    expect(wrapper.find('#password').length).toEqual(1)
  })
  it('have Submit Button', () => {
    const wrapper = shallow(
      <RegisterForm />
    )
    expect(wrapper.find('#submit-button').length).toEqual(1)
  })
  it('have Back button', () => {
    const wrapper = shallow(
      <RegisterForm />
    )
    expect(wrapper.find('#back-button').length).toEqual(1)
  })
  it('call props.gotoLogin when click Back', () => {
    const stub = jest.fn()
    const wrapper = shallow(
      <RegisterForm
        gotoLogin={stub}
      />
    )
    wrapper.find('#back-button').simulate('click')
    expect(stub).toHaveBeenCalled()
  })
  it('call props.register when handleSubmitRegister is invorked', () => {
    const stub = jest.fn()
    const wrapper = shallow(
      <RegisterForm
        register={stub}
      />
    )
    const input = {
      username: 'username',
      email: 'email',
      password: 'password',
    }
    wrapper.setState({
      usernameInput: 'username',
      emailInput: 'email',
      passwordInput: 'password',
    })
    wrapper.instance().handleSubmitRegister()
    expect(stub).toHaveBeenCalledWith(input)
  })
});
