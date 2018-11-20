import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Button from '../index';

describe('<Button />', () => {
  it('render label props', () => {
    const wrapper = shallow(
      <Button
        label="Hello"
      />
    )
    expect(wrapper.text()).toEqual('Hello')
  })
  it('call props.onClick when click', () => {
    const stub = jest.fn()
    const wrapper = shallow(
      <Button
        label="Click"
        onClick={stub}
      />
    )
    wrapper.simulate('click')
    expect(stub.mock.calls.length).toEqual(1)
    wrapper.setProps({ disabled: true })
    wrapper.simulate('click')
    expect(stub.mock.calls.length).toEqual(1)
  })
});
