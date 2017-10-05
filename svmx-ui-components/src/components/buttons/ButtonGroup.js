
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import './css/button-group-style.css';

class ButtonGroup extends Component {

  render() {

    return (
      <div className="btn-group">
        <Button id="id1" label='Label 1' />
        <Button id="id2" label='Label 2' />
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  buttons:  PropTypes.instanceOf(Map),
}

export default ButtonGroup;
