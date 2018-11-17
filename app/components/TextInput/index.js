/**
 *
 * TextInput
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md'

const StyledComponents = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-bottom: 2px solid #EE2D60;
  .icon-wrapper {
    display: flex;
    align-items: center;
    margin-right: 6px;
    svg {
      color: #EE2D60;
      width: 20px;
      height: 20px;
    }
  }
  input {
    width: 100%;
    outline-style: none;
  }
`

/* eslint-disable react/prefer-stateless-function */
class TextInput extends React.Component {
  render() {
    return (
      <StyledComponents>
        <div className="icon-wrapper">
          <MdEmail />
        </div>
        <input type="text" value="Kitsanapong.r@gmail.com" />
      </StyledComponents>
    )
  }
}

TextInput.propTypes = {};

export default TextInput;
