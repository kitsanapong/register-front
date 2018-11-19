/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponents = styled.div`
  width: 100%;
  background-color: #EE2D60;
  padding: 6px 16px;
  color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s;
  &.disabled {
    cursor: default;
    background-color: rgb(229, 229, 229);
    color: rgba(0, 0, 0, 0.3);
    box-shadow: unset;
    :hover {
      background-color: rgb(229, 229, 229);
      box-shadow: unset;
    }
  }
  :hover {
    background-color: #f26389;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  }
`

/* eslint-disable react/prefer-stateless-function */
class Button extends React.Component {
  getClassName() {
    let className = ''
    className += this.props.disabled ? ' disabled' : ''
    return className
  }

  render() {
    return (
      <StyledComponents className={this.getClassName()}>
        { this.props.label }
      </StyledComponents>
    )
  }
}

Button.propTypes = {
  label: PropTypes.string,
  disable: PropTypes.bool,
};

export default Button;
