import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {

  constructor(props) {
    super(props);

    this.state = {
      type : props.type,
      label: props.label
    }
  }

  render() {

    return (
      <px-alert-label label={this.state.label} type={this.state.type}/>
    );
  }
}

Label.propTypes = {
  label : PropTypes.string.isRequired,
  type: PropTypes.oneOf(['important', 'warning', 'error', 'information', 'unknown', 'healthy'])
}

export default Label;
