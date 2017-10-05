
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/flag-style.css';

class Flag extends Component {

  render() {

    return (
      <figure className="flag">
        <div className="flag__img">
          <img src="https://placehold.it/50x50" alt="description"></img>
        </div>
        <figcaption className="flag__body">{this.props.caption}</figcaption>
      </figure>
    );
  }
}

Flag.propTypes = {
  padding: PropTypes.oneOf(['regular', 'flush', 'tiny', 'small', 'large', 'huge']),
  alignment: PropTypes.oneOf(['middle', 'top', 'bottom']),
  reverse : PropTypes.bool,
  image: PropTypes.string,
  caption: PropTypes.string.isRequired,
}

export default Flag;
