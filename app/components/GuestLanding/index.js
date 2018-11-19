/**
 *
 * GuestLanding
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import GamersImage from 'images/gamers.jpg'
import PublishersImage from 'images/publishers.jpg'
import OrganizersImage from 'images/11.jpg'
import TeamsImage from 'images/teams.jpg'
import SponsorsImage from 'images/sponsors1.jpg'
import InvestorsImage from 'images/investors.jpg'

const BACKDROP_DETAILS = [
  {
    image: GamersImage,
    title: 'GAMERS',
    detail: 'Gamers on different levels across different games will be able to compete and make money on Gamico.',
  },
  {
    image: PublishersImage,
    title: 'PUBLISHERS',
    detail: 'Game publishers will be able to integrate their games to Gamico and thus create automatic head-to-head battles.',
  },
  {
    image: OrganizersImage,
    title: 'ORGANIZERS',
    detail: 'Gamico is the one stop location where esports tournament organizers can host online tournaments.',
  },
  {
    image: TeamsImage,
    title: 'TEAMS',
    detail: 'Esports teams can not only compete on Gamico but also use it to scout new players and find sponsors and investors.',
  },
  {
    image: SponsorsImage,
    title: 'SPONSORS',
    detail: 'Companies will have a chance to sponsor esports tournaments and in doing so increase the reach of their brand.',
  },
  {
    image: InvestorsImage,
    title: 'INVESTORS',
    detail: 'Investors will have a chance to not only invest in esports teams but sponsor individual esports players as well.',
  },
]

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
  constructor(props) {
    super(props)
    this.state = {
      backdropIndex: 0,
    }
  }

  componentDidMount() {
    this.rotateBackdropImage()
  }

  renderForm() {
    const { children } = this.props
    return children
  }

  rotateBackdropImage() {
    setInterval(() => {
      this.setState({
        backdropIndex: this.state.backdropIndex + 1,
      })
    }, 5000)
  }

  rednerBackdropImage() {
    const index = this.state.backdropIndex % BACKDROP_DETAILS.length
    return BACKDROP_DETAILS[index].image
  }

  renderBackdropTitle() {
    const index = this.state.backdropIndex % BACKDROP_DETAILS.length
    return BACKDROP_DETAILS[index].title
  }

  renderBackdropDetail() {
    const index = this.state.backdropIndex % BACKDROP_DETAILS.length
    return BACKDROP_DETAILS[index].detail
  }

  render() {
    return (
      <StyledComponents>
        <div className="left">
          <div className="backdrop-wrapper">
            <img src={this.rednerBackdropImage()} />
          </div>
          <div className="description-wrapper">
            <div className="title">{ this.renderBackdropTitle() }</div>
            <div className="divider"></div>
            <div className="detail">{ this.renderBackdropDetail() }</div>
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
