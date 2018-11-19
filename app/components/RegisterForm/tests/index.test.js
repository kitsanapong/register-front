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
});
