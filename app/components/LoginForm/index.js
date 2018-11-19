/**
 *
 * LoginForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdEmail, MdVpnKey } from 'react-icons/md'

import GamicoIcon from 'images/gamico.jpg'

import TextInput from 'components/TextInput'
import Button from 'components/Button'

const StyledCompoent = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .header {
    .icon-wrapper {
      display: flex;
      justify-content: center;
      height: 130px;
      img {
        width: 130px;
        border-radius: 50%;
      }
    }
    .text {
      .text-highlight {
        color: #EE2D60;
      }
    }
  }
  .register-wrapper {
    text-align: center;
    .text {
      font-size: 14px;
      opacity: 0.54;
    }
    .highlight {
      margin-left: 6px;
      cursor: pointer;
      font-size: 14px;
      color: rgb(24,21,37);
      opacity: 1;
      font-weight: bold;
    }
  }
`

/* eslint-disable react/prefer-stateless-function */
class LoginForm extends React.Component {
  render() {
    return (
      <StyledCompoent>
        <div className="header">
          <div className="icon-wrapper">
            <img src={GamicoIcon} />
          </div>
        </div>
        <div className="input-wrapper">
          <TextInput
            active={true}
            icon={<MdEmail />}
            placeholder="Email"
            type="text"
          />
          <TextInput
            icon={<MdVpnKey />}
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="button-wrapper">
          <Button label="LOGIN" />
        </div>
        <div className="register-wrapper">
          <span className="text">Don't have an account?</span>
          <span className="highlight">Sign up</span>
        </div>
      </StyledCompoent>
    )
  }
}

LoginForm.propTypes = {};

export default LoginForm;
