/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md'

const StyledComponents = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-bottom: 2px solid #E0E0E0;
  &.active {
    border-bottom: 2px solid #EE2D60;
    .icon-wrapper > svg {
      color: #EE2D60;
    }
    input {
      color: #EE2D60;
    }
  }
  .icon-wrapper {
    display: flex;
    align-items: center;
    margin-right: 6px;
    svg {
      color: #E0E0E0;
      width: 20px;
      height: 20px;
    }
  }
  input {
    color: #E0E0E0;
    width: 100%;
    outline-style: none;
  }
`

/* eslint-disable react/prefer-stateless-function */
class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active,
    }
  }

  componentDidMount() {
    this.focusInput()
  }

  focusInput() {
    if (this.input && this.props.active === true) {
      this.input.focus()
    }
  }

  getClassName() {
    const { active } = this.state
    let className = ''
    className += active === true ? ' active' : ''
    return className
  }

  handleOnFocus() {
    this.setState({
      active: true,
    })
  }

  handleOnBlue() {
    this.setState({
      active: false,
    })
  }

  renderIcon() {
    return this.props.icon
  }

  render() {
    return (
      <StyledComponents className={this.getClassName()}>
        <div className="icon-wrapper">
          { this.renderIcon() }
        </div>
        <input
          id="input"
          ref={(input) => { this.input = input }}
          type="text"
          onFocus={() => { this.handleOnFocus() }}
          onBlur={() => { this.handleOnBlue() }}
        />
      </StyledComponents>
    )
  }
}

TextInput.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.node,
};

TextInput.defaultProps = {
  active: false,
}

export default TextInput;
