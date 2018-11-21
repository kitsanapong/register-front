/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components'

import BackgroundImage from 'images/background.jpg'
import Button from 'components/Button'

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage, { makeSelectUserData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { GetUser } from './actions';

const StyledComponents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  positio: relative;
  background: linear-gradient(rgba(238,45,96,0.8),rgba(20,22,66,0.95)), url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  .wrapper {
    z-index: 2;
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 36px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
    .username {
      text-align: center;
      font-size: 36px;
    }
  }
`

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUser()
  }

  renderContent() {
    const username = this.props.homePage.userData ? this.props.homePage.userData.username : ''
    return (
      <StyledComponents>
        <div className="wrapper">
          <div className="username">{ username }</div>
          <div>
            <Button label="LOG OUT" />
          </div>
        </div>
      </StyledComponents>
    )
  }

  render() {
    return (
      <div className="full-height">
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        { this.renderContent() }
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUser: () => {
      dispatch(GetUser())
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
