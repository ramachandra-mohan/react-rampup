
import React, { Component } from 'react';

import './css/box-style.css';

class Box extends Component {

  render() {

    return (
      <div className='box'>
        {this.props.children}
      </div>
    );
  }
}

export default Box;
