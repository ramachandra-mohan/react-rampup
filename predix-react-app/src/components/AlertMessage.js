
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlertMessage extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      type: props.type || 'information',
      action: props.action || 'dismiss',
      autodismiss: props.autodismiss || '0',
      title: props.title,
      message: props.message,
    };
  }

  hideSeverity() {

    if( this.props.hasOwnProperty('hide-severity') ) {
      return(false);
    }
    return(true);
  }

  render() {

    let options = {};

    if( this.props.hasOwnProperty('visible') ) {
      options['visible'] = 'visible';
    }

    if( this.props.hasOwnProperty('hide-badge') ) {
      options['hide-badge'] = 'hide-badge';
    }

    if( this.props.hasOwnProperty('hide-severity') ) {
      options['hide-severity'] = 'hide-severity';
    }

    return (
      <px-alert-message
         {...options}
         type={this.state.type}
         action={this.state.action}
         message-title={this.state.title}
         message={this.state.message}
         auto-dismiss={this.state.autodismiss}>
      </px-alert-message>
    );
  }
}

AlertMessage.propTypes = {

  autodismiss: PropTypes.string,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.string,
  type: PropTypes.oneOf(['important','warning', 'error', 'information', 'unknown', 'custom', 'more']).isRequired,
};

export default AlertMessage;
