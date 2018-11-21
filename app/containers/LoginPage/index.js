/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components'

import GuestLanding from 'components/GuestLanding'
import LoginForm from 'components/LoginForm'
import RegisterForm from 'components/RegisterForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Register, Login } from './actions';
import { push } from 'connected-react-router';

const LOGIN_MODE = 'LOGIN_MODE'
const REGISTER_MODE = 'REGISTER_MODE'

const StyledComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgb(24,21,37);
`

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: LOGIN_MODE,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loginPage.requestingLogin === true && nextProps.loginPage.requestingLogin === false && Object.keys(nextProps.loginPage.loginError).length === 0) {
      this.props.goto('/homepage')
    }
  }

  gotoRegister() {
    this.setState({
      mode: REGISTER_MODE,
    })
  }

  gotoLogin() {
    this.setState({
      mode: LOGIN_MODE,
    })
  }

  renderForm() {
    const { mode } = this.state
    if (mode === LOGIN_MODE) {
      return (
        <LoginForm
          id="login-form"
          gotoRegister={() => { this.gotoRegister() }}
          login={this.props.login.bind(this)}
          error={this.props.loginPage.loginError}
        />
      )
    } else if (mode === REGISTER_MODE) {
      return (
        <RegisterForm
          id="register-form"
          gotoLogin={() => { this.gotoLogin() }}
          register={this.props.register.bind(this)}
          requestingRegister={this.props.loginPage.requestingRegister}
          registerError={this.props.loginPage.registerError}
        />
      )
    } else {
      return <LoginForm id="login-form" />
    }
  }

  render() {
    return (
      <StyledComponent>
        <GuestLanding>
          { this.renderForm() }
        </GuestLanding>
      </StyledComponent>
    )
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loginPage: PropTypes.object,
  login: PropTypes.func,
  register: PropTypes.func,
};

LoginPage.defaultProps = {
  loginPage: {},
  login: () => {},
  register: () => {},
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    register: (data) => {
      dispatch(Register(data))
    },
    login: (data) => {
      dispatch(Login(data))
    },
    goto: (path) => {
      dispatch(push(path))
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
