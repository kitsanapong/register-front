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
  .back-wrapper {
    text-align: center;
    .text {
      font-size: 14px;
      opacity: 0.54;
    }
    svg {
      opacity: 0.54;
    }
  }
`

/* eslint-disable react/prefer-stateless-function */
class RegisterForm extends React.Component {
  render() {
    return (
      <StyledCompoent>
        <div className="header">
        </div>
        <div className="input-wrapper">
          <TextInput
            id="username"
            active={true}
            icon={<MdPerson />}
            placeholder="Username"
            type="text"
          />
          <TextInput
            id="email"
            icon={<MdEmail />}
            placeholder="Email"
            type="text"
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
          <span id="back-button" className="text">Back</span>
        </div>
      </StyledCompoent>
    )
  }
}

RegisterForm.propTypes = {};

export default RegisterForm;
