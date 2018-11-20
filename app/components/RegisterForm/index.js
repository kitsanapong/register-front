/**
 *
 * RegisterForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdEmail, MdVpnKey, MdPerson, MdKeyboardArrowLeft} from 'react-icons/md'

import TextInput from 'components/TextInput'
import Button from 'components/Button'

import { isUsernameValid, isEmailValid, isPasswordValid } from 'utils/inputValidate'

const StyledCompoent = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .header {
    .title {
      font-size: 30px;
      text-align: center;
    }
  }
  .back-wrapper {
    text-align: center;
    width: 50px;
    cursor: pointer;
    opacity: 0.54;
    :hover {
      opacity: 1;
    }
    .text {
      font-size: 14px;
    }
  }
`

/* eslint-disable react/prefer-stateless-function */
class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameInput: '',
      usernameInfo: '',
      emailInput: '',
      emailInfo: '',
      passwordInput: '',
      passwordInfo: '',
    }
  }

  handleUsernameChange(e) {
    const input = e.target.value
    this.setState({
      usernameInput: input,
      usernameInfo: isUsernameValid(input) ? '' : 'Username must be alphanumeric and with 4 - 20 of length'
    })
  }

  handleEmailChange(e) {
    const input = e.target.value
    this.setState({
      emailInput: input,
      emailInfo: isEmailValid(input) ? '' : 'Email must be correct and not exceed 50 of length',
    })
  }

  handlePasswordChange(e) {
    const input = e.target.value
    this.setState({
      passwordInput: input,
      passwordInfo: isPasswordValid(input) ? '' : 'Password must have 8 - 20 of length',
    })
  }

  handleSubmitRegister() {
    this.props.register({
      username: this.state.usernameInput,
      email: this.state.emailInput,
      password: this.state.passwordInput,
    })
  }

  renderRegisterButton() {
    const disabled = !isUsernameValid(this.state.usernameInput) 
                    || !isEmailValid(this.state.emailInput)
                    || !isPasswordValid(this.state.passwordInput)
    return (
      <Button
        id="submit-button"
        label="REGISTER"
        disabled={disabled}
        onClick={() => { this.handleSubmitRegister() }}
      />
    )
  }

  render() {
    return (
      <StyledCompoent>
        <div className="header">
          <div className="title">Create Gamico account</div>
        </div>
        <div className="input-wrapper">
          <TextInput
            ref={(input) => { this.username = input }}
            id="username"
            active={true}
            icon={<MdPerson />}
            placeholder="Username"
            type="text"
            onChange={(e) => { this.handleUsernameChange(e) }}
            info={this.state.usernameInfo}
          />
          <TextInput
            id="email"
            icon={<MdEmail />}
            placeholder="Email"
            type="text"
            onChange={(e) => { this.handleEmailChange(e) }}
            info={this.state.emailInfo}
          />
          <TextInput
            id="password"
            icon={<MdVpnKey />}
            placeholder="Password"
            type="password"
            onChange={(e) => { this.handlePasswordChange(e) }}
            info={this.state.passwordInfo}
          />
        </div>
        <div className="button-wrapper">
          { this.renderRegisterButton() }
        </div>
        <div className="back-wrapper">
          <span className="icon-wrapper">
            <MdKeyboardArrowLeft />
          </span>
          <span id="back-button" className="text" onClick={() => { this.props.gotoLogin() }}>Back</span>
        </div>
      </StyledCompoent>
    )
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func,
  gotoLogin: PropTypes.func,
};

RegisterForm.defaultProps = {
  register: () => {},
  gotoLogin: () => {},
}

export default RegisterForm;
