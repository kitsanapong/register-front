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
  it('have info', () => {
    const wrapper = shallow(
      <TextInput />
    )
    expect(wrapper.find('#info').length).toEqual(1)
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
  it('have palceholder props', () => {
    const wrapper = shallow(
      <TextInput placeholder="Hello" />
    )
    expect(wrapper.find('input').props().placeholder).toEqual('Hello')
  })
  it('have type props', () => {
    const wrapper = shallow(
      <TextInput type="text" />
    )
    expect(wrapper.find('input').props().type).toEqual('text')
  })
  it('render info from props', () => {
    const wrapper = shallow(
      <TextInput info="this is info" />
    )
    expect(wrapper.contains('this is info')).toEqual(true)
  })
  it('call props.onChange when input change', () => {
    const stub = jest.fn()
    const wrapper = shallow(
      <TextInput
        onChange={stub}
      />
    )
    wrapper.find('#input').simulate('change', {
      target: {
        value: 'Hello'
      }
    })
    expect(stub).toHaveBeenCalled()
  })
});
