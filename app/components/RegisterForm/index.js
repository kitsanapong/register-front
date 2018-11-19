/**
 *
 * RegisterForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdEmail, MdVpnKey, MdPerson, MdKeyboardArrowLeft} from 'react-icons/md'

import TextInput from 'components/TextInput'
import Button from 'components/Button'

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
      usernameInfo: '',
    }
  }

  handleUsernameChange(e) {
    const input = e.target.value
    if (!this.isUsernameValid(input)) {
      this.setState({
        usernameInfo: 'Username must be alphanumeric and with length of 4 - 20',
      })
    } else {
      this.setState({
        usernameInfo: '',
      })
    }
  }

  isUsernameValid(input) {
    const usernameRegx = /^([a-zA-Z0-9]){4,20}$/
    return usernameRegx.test(input)
  }

  handleEmailChange(e) {
    const input = e.target.value
    if (!this.isEmailValid(input)) {
      this.setState({
        emailInfo: 'Email must be correct and not exceed 50 of length',
      })
    } else {
      this.setState({
        emailInfo: '',
      })
    }
  }

  isEmailValid(input) {
    const emailRegx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const lengthLimit = input.length >= 1 && input.length <= 50
    return emailRegx.test(input) && lengthLimit
  }

  isPasswordValid(input) {
    return input.length >= 8 && input.length <= 20
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
          />
        </div>
        <div className="button-wrapper">
          <Button id="submit-button" label="REGISTER" />
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

RegisterForm.propTypes = {};

export default RegisterForm;
