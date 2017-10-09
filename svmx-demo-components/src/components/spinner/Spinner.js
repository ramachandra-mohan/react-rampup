import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

class Spinner extends Component {

  constructor(props) {
    super(props);

    this.state = {

      width : `${props.size || 100}px`,
      height : `${props.size || 100}px`,
      finished : props.finished || false,
    };

      this.buildSpinner = this.buildSpinner.bind(this);
  }

  buildSpinner() {

    if( !this.state.finished ) {

      return(
        <div style={{width: this.state.width, height: this.state.height,}}
          className="spinner-container">
        </div>
      );
    }
    return(<div></div>);
  }

  render() {

    return (
      <div>
        {this.buildSpinner()}
      </div>
    );
  }
}

Spinner.propTypes = {
  size: PropTypes.number,
  finished: PropTypes.bool,
}

export default Spinner;
