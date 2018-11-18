import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import TextInput from '../index';

describe('<TextInput />', () => {
  it('have input', () => {
    const wrapper = shallow(
      <TextInput />
    )
    expect(wrapper.find('#input').length).toEqual(1)
  })
  it('have className active of props active is true', () => {
    const wrapper = shallow(
      <TextInput active={true}/>
    )
    expect(wrapper.hasClass('active')).toEqual(true)
  })
  it('have className active of props active is false', () => {
    const wrapper = shallow(
      <TextInput active={false}/>
    )
    expect(wrapper.hasClass('active')).toEqual(false)
  })
});
