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

const StyledCompoent = styled.div`
  padding: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .header {
    .icon-wrapper {
      display: flex;
      justify-content: center;
      height: 100px;
      img {
        width: 100px;
        border-radius: 50%;
      }
    }
    .text {
      .text-highlight {
        color: #EE2D60;
      }
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
          <button>Login</button>
        </div>
        <div className="register-wrapper">
          <div className="text">
            Don't have an account?
            <span>Sign up</span>
          </div>
        </div>
      </StyledCompoent>
    )
  }
}

LoginForm.propTypes = {};

export default LoginForm;
