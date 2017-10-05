import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  constructor(props) {
    super(props);

    this.handleClick = props.handleClick.bind(this);
  }

  handleClick(e) {

    console.log( 'Button::handleClick() : ' + e );
    this.props.handleClick(e);
  }

  render() {
    return (
      <button
        onClick={this.props.handleClick}
        className={'btn ' + this.props.className}
        type={this.props.type || 'button'}
        disabled={this.props.disabled || false}>

        {this.props.label}

      </button>
    );
  }
}

Button.propTypes = {

  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),

  label: PropTypes.string.isRequired,
};

export default Button;
