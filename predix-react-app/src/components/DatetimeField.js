
import React, { Component } from 'react';

class DatetimeField extends Component {

  render() {
    return (
      <px-datetime-field date-format="YYYY/MM/DD" time-format="HH:mm:ss" time-zone="UTC" show-time-zone="dropdown" date-time="2017-10-04T05:00:14.000Z" min='"2016-10-04T05:00:14.585Z"' max='"2018-10-04T05:00:14.587Z"'>
      </px-datetime-field>
    );
  }
}

export default DatetimeField;
