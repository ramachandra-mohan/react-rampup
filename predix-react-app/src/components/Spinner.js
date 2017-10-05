import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spinner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size : props.size || 100
    }
  }

  render() {

    return (
      <px-spinner size={this.state.size}></px-spinner>
    );
  }
}

Spinner.propTypes = {
  label : PropTypes.string
}

export default Spinner;
