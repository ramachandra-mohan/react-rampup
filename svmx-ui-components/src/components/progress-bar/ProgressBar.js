import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

class ProgressBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      finished : props.finished || false,
    };

    this.buildProgressBar = this.buildProgressBar.bind(this);
  }

  buildProgressBar() {

    if( !this.state.finished ) {

      return(
        <div style={{infinite: true, value: 100}} className="background">
          <div className="fill" style={{transform: 100}}>
          </div>
        </div>
      );
    }
    return(<div></div>);
  }

  render() {

    return (
        this.buildProgressBar()
    );
  }
}

ProgressBar.propTypes = {
  size: PropTypes.number,
}

export default ProgressBar;
