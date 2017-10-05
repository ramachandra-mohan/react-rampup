
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {

  render() {
    return (
      <px-progress-bar value={this.props.value} infinite> </px-progress-bar>
    );
  }
}

ProgressBar.propTypes = {
  value: PropTypes.string.isRequired
};

export default ProgressBar;
