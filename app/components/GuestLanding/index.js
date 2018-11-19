/**
 *
 * GuestLanding
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import GamersImage from 'images/gamers.jpg'

const StyledComponents = styled.div`
  width: 720px;
  height: 480px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  background-color: white;
  display: flex;
  flex-direction: row;
  .right {
    width: 420px;
  }
  .left {
    width: 300px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
    .backdrop-wrapper {
      img {
        height: 210px;
        width: 100%;
      }
    }
    .description-wrapper {
      height: 270px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      padding: 42px;
      .title {
        font-size: 30px;
        letter-spacing: 1px;
        font-weight: 700;
      }
      .divider {
        width: 36px;
        height: 6px;
        background-color: black;
      }
      .detail {
        opacity: 0.87;
        font-size: 14px;
        text-align: center;
      }
    }
  }
`

/* eslint-disable react/prefer-stateless-function */
class GuestLanding extends React.Component {
  renderForm() {
    const { children } = this.props
    return children
  }

  render() {
    return (
      <StyledComponents>
        <div className="left">
          <div className="backdrop-wrapper">
            <img src={GamersImage} />
          </div>
          <div className="description-wrapper">
            <div className="title">GAMERS</div>
            <div className="divider"></div>
            <div className="detail">Gamers on different levels across different games will be able to compete and make money on Gamico.</div>
          </div>
        </div>
        <div className="right">
          { this.renderForm() }
        </div>
      </StyledComponents>
    )
  }
}

GuestLanding.propTypes = {};

export default GuestLanding;
