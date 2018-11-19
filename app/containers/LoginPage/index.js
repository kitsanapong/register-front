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

  gotoRegister() {
    this.setState({
      mode: REGISTER_MODE,
    })
  }

  renderForm() {
    const { mode } = this.state
    if (mode === LOGIN_MODE) {
      return (
        <LoginForm
          gotoRegister={() => { this.gotoRegister() }}
        />
      )
    } else if (mode === REGISTER_MODE) {
      return <RegisterForm />
    } else {
      return <LoginForm />
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
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
