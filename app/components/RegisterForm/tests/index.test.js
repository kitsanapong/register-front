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
  it('Username must be alphanumeric and with length of 4 - 20', () => {
    const wrapper = shallow(
      <RegisterForm />
    )
    expect(wrapper.instance().isUsernameValid('111')).toEqual(false)
    expect(wrapper.instance().isUsernameValid('1111')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('11111111111111111111')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('111111111111111111111')).toEqual(false)
    expect(wrapper.instance().isUsernameValid('aaa')).toEqual(false)
    expect(wrapper.instance().isUsernameValid('aaaa')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('aaaaaaaaaaaaaaaaaaaa')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('aaaaaaaaaaaaaaaaaaaaa')).toEqual(false)
    expect(wrapper.instance().isUsernameValid('AAA')).toEqual(false)
    expect(wrapper.instance().isUsernameValid('AAAA')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('AAAAAAAAAAAAAAAAAAAA')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('AAAAAAAAAAAAAAAAAAAAA')).toEqual(false)
    expect(wrapper.instance().isUsernameValid('11a')).toEqual(false)
    expect(wrapper.instance().isUsernameValid('11aa')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('1111111111aaaaaaaaaa')).toEqual(true)
    expect(wrapper.instance().isUsernameValid('1111111111111111111aa')).toEqual(false)
  })
});
