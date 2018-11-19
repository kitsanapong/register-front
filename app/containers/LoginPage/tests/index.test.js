import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import { LoginPage } from '../index';

describe('<LoginPage />', () => {
  it('have mode state', () => {
    const wrapper = shallow(
      <LoginPage />
    )
    expect(wrapper.instance().state.mode).toBeDefined()
  })
});
