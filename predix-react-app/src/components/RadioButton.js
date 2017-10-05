
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioButton extends Component {

  constructor(props) {
    super(props);

    this.disabled = this.disabled.bind(this);
    this.selected = this.selected.bind(this);
  }

  disabled() {

    if( this.props.hasOwnProperty('disabled') ) {
      return(true);
    }
    return(false);
  }

  selected() {

    if( this.props.hasOwnProperty('selected') ) {
      return(true);
    }
    return(false);
  }

  render() {

    return (
      <div>
        <input id={this.props.id} name="radio-group" type="radio" disabled={this.disabled()} className='u-mt'/>
        <label className="label--inline" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
}

export default RadioButton;
