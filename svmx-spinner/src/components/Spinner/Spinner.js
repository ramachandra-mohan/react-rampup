import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';

class Spinner extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      size : `${props.size}px`,
      finished : props.finished
    };
  }

  get _style() {
    return {width: this.state.size, height: this.state.size};
  }

  get _spinner() {

    if( !this.state.finished ) {
      return(<div style={this._style} className="spinner-container"></div>);
    }
    return(<div></div>);
  }

  render() {
    return (
      <div> {this._spinner} </div>
    );
  }
}

Spinner.defaultProps = {
  size: 100,
  finished: false
};

Spinner.propTypes = {
  size: PropTypes.number,
  finished: PropTypes.bool
}

export default Spinner;
