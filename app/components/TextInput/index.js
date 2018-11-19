/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponents = styled.div`
  width: 100%;
  height: 36px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-bottom: 2px solid #BDBDBD;
  &.active {
    border-bottom: 2px solid #EE2D60;
    .icon-wrapper > svg {
      color: #EE2D60;
    }
    input {
      color: #EE2D60;
    }
    .info-wrapper {
      opacity: 1;
    }
  }
  .icon-wrapper {
    display: flex;
    align-items: center;
    margin-right: 6px;
    svg {
      color: #BDBDBD;
      width: 20px;
      height: 20px;
    }
  }
  input {
    color: #BDBDBD;
    width: 100%;
    outline-style: none;
  }
  .info-wrapper {
    position: absolute;
    top: 38px;
    opacity: 0;
    .text {
      font-size: 11px;
      color: red;
    }
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
          type={this.props.type}
          onFocus={() => { this.handleOnFocus() }}
          onBlur={() => { this.handleOnBlue() }}
          placeholder={this.props.placeholder}
        />
        <div className="info-wrapper">
          <div id="info" className="text">{ this.props.info }</div>
        </div>
      </StyledComponents>
    )
  }
}

TextInput.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  info: PropTypes.string,
};

TextInput.defaultProps = {
  active: false,
  type: 'text',
  info: '',
}

export default TextInput;
