/**
 *
 * GuestLanding
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import BackdropImage from 'images/backdrop.png'
import GamicoImage from 'images/gamico.jpg'

const StyledComponents = styled.div`
  width: 720px;
  height: 480px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  background-color: white;
  display: flex;
  flex-direction: row;
  .left, .right {
    width: 50%;
  }
  .left {
    position: relative;
    .backdrop-wrapper {
      img {
        height: 480px;
        width: 100%;
        object-fit: cover;
      }
    }
    .icon-wrapper {
      position: absolute;
      top: 12px;
      left: 12px;
      img {
        width: 48px;
        border-radius: 50%;
      }
    }
  }
`

/* eslint-disable react/prefer-stateless-function */
class GuestLanding extends React.Component {
  render() {
    return (
      <StyledComponents>
        <div className="left">
          <div className="backdrop-wrapper">
            <img src={BackdropImage} />
          </div>
          <div className="icon-wrapper">
            <img src={GamicoImage}/>
          </div>
        </div>
        <div className="right"></div>
      </StyledComponents>
    )
  }
}

GuestLanding.propTypes = {};

export default GuestLanding;
