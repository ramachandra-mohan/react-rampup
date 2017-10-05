import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CalendarPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode : props.mode || 'day'
    }
  }

  render() {

    return (
      <px-calendar-picker display-mode={this.state.mode}></px-calendar-picker>
    );
  }
}

CalendarPicker.propTypes = {
  mode : PropTypes.string
}

export default CalendarPicker;
