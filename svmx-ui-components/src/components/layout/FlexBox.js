
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/flexbox-style.css';

class FlexBox extends Component {

  render() {

    return (
      <div className='flex flex--row flex--spaced flex--middle'>
        {this.props.children}
      </div>
    );
  }
}

FlexBox.propTypes = {
  direction : PropTypes.oneOf(['row', 'column']),
  justify : PropTypes.oneOf(['left', 'center', 'right', 'justify', 'spaced']),
  alignment : PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch', 'baseline']),
}

export default FlexBox;
