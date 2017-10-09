import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

class TextField extends Component {

  constructor(props) {
    super(props);

    const validationStyle = { '': '', none: '', warning: 'validation-warning', error: 'validation-error', success: 'validation-success'};

    this.state = {
      label : props.label,
      placeholder : props.placeholder || 'Enter a text',
      validation : validationStyle[props.validation],
      style : `text-input input--regular ${validationStyle[props.validation]}`,
      type: props.type || 'text'
    }

    this.disabled = this.disabled.bind(this);
  }

  disabled() {

    if( this.props.hasOwnProperty('disabled') ) {
      return(true);
    }
    return(false);
  }

  render() {

    return (
      <div>
        <label htmlFor="input1">{this.state.label}</label>
        <input id='input1' placeholder={this.state.placeholder} className={this.state.style} type={this.state.type} disabled={this.disabled()}/>
      </div>
    );
  }
}

TextField.propTypes = {
  label : PropTypes.string.isRequired,
  placeholder : PropTypes.string,
  length : PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'search', 'number', 'password']),
  validation: PropTypes.oneOf(['none', 'warning', 'error', 'success']),
}

export default TextField;
