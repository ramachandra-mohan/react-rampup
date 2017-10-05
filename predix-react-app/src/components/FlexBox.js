
import React, { Component } from 'react';

class FlexBox extends Component {

  render() {

    return (
      <div className="flex flex--wrap flex--justify u-p">
        {this.props.children}
      </div>
    );
  }
}

export default FlexBox;
