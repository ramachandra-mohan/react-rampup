import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './stats';
import Stopwatch from './stopwatch';

export default class Header extends Component {

  constructor(props) {
    super(props)

    this.players = this.props.players;
  }
  static get propTypes() {
    return {
      title : PropTypes.string.isRequired,
      players: PropTypes.array.isRequired,
    }
  }

  static get defaultProps() {
    return {
      title: "Scoreboard",
    }
  }

  render() {
    return (
        <div className='header'>
          <Stats players={this.props.players}/>
          <h1>{this.props.title}</h1>
          <Stopwatch />
        </div>
    );
  }
};
