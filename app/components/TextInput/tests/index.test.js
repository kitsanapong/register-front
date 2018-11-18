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
  it('have render icon', () => {
    const icon = <div>this is icon</div>
    const wrapper = shallow(
      <TextInput icon={icon} />
    )
    expect(wrapper.containsMatchingElement(icon)).toEqual(true)
  })
  it('have render palceholder props', () => {
    const wrapper = shallow(
      <TextInput placeholder="Hello" />
    )
    expect(wrapper.find('input').props().placeholder).toEqual('Hello')
  })
});
