
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

class Toggle extends Component {

  constructor(props) {
    super(props);

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
        <input id={this.props.id} type="checkbox" className="toggle__input" disabled={this.disabled()}/>
          <label htmlFor={this.props.id} className="toggle__label"></label>
      </div>
    );
  }
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired
}

export default Toggle;
