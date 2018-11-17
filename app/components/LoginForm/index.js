/**
 *
 * LoginForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import GamicoIcon from 'images/gamico.jpg'

const StyledCompoent = styled.div`

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
          <div className="text">
            COMPETE MORE WIN MORE ACHIEVE MORE
          </div>
        </div>
        <div className="input-wrapper">
          <input id="username" type="text" value="Kitsanapong.r@gmail.com" />
          <input id="password" type="password" value="zzzzzzzzzz" />
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
