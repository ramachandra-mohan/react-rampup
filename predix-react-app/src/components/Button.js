import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  constructor(props) {
    super(props);

    if( props.handleClick ) {
        this.handleClick = props.handleClick.bind(this);
    }
  }

  handleClick(e) {

    console.log( 'Button::handleClick() : ' + e );
    this.props.handleClick(e);
  }

  disabled() {

    if( this.props.hasOwnProperty('disabled') ) {
      return(true);
    }
    return(false);
  }

  render() {

    let style = 'btn';
    if( this.props.type === 'primary' ) {
      style = `${style} btn--primary`
    }

    return (
      <button
        onClick={this.props.handleClick}
        className={style}
        disabled={this.disabled()}>
        {this.props.label || 'Default'}
      </button>
    );
  }
}

Button.propTypes = {

  disabled: PropTypes.bool,
  label: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['regular','primary', 'bare', 'call-to-action', 'tertiary', 'bare-primary']),
  size: PropTypes.oneOf(['small', 'large', 'huge', 'full']),
};

export default Button;
