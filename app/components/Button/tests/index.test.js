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
});
