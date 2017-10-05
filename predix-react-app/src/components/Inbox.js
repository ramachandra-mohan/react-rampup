import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inbox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items : props.items || '[{"id":"1","title":"General Edison","subtitle":"Disassembly","severity":"","date":"2017-10-05T01:29","alertId":"749581","alertSource":"Combustion","receivedDateTime":"2016-10-05T08:00","caseNumber":"127587937","customer":"Dorothy Vaughan","serialNumber":"GT769375","dlnType":"DLN 2.6","model":"7FA+e","formattedDate":"BOOKED"},{"id":"2","title":"General Edison","subtitle":"Component inspections","severity":"","date":"2016-10-04T01:27","alertId":"249375","alertSource":"Ignition","receivedDateTime":"2016-10-04T03:30","caseNumber":"857463748","customer":"Mary Jackson","serialNumber":"GE783556","dlnType":"DLN 1.4","model":"2MA+c","formattedDate":"ASSIGNED"},{"id":"3","title":"General Edison","subtitle":"Identify part, remove and inspect","severity":"","date":"2016-10-03T01:21","alertId":"749581","alertSource":"Combustion","receivedDateTime":"2016-10-03T01:50","caseNumber":"5635221","customer":"Katherine Johnson","serialNumber":"DM528443","dlnType":"DLN 1.0","model":"9985A","formattedDate":"ASSIGNED"},{"id":"4","title":"General Edison","subtitle":"Review all safty procedures","severity":"","date":"2016-10-03T01:05","alertId":"1999574","alertSource":"Combustion","receivedDateTime":"2016-10-03T10:03","caseNumber":"44938","customer":"Sally Ride","serialNumber":"GT769375","dlnType":"DLN 2.6","model":"7FA+e","formattedDate":"ASSIGNED"},{"id":"5","title":"General Edison","subtitle":"Arrival of resporce and equipment","severity":"","date":"2016-10-02T12:30","alertId":"482001","alertSource":"Combustion","receivedDateTime":"2016-10-02T11:16","caseNumber":"127587937","customer":"Ilan Ramon","serialNumber":"IL194800","dlnType":"DLN 6","model":"TTA3","formattedDate":"ASSIGNED"},{"id":"6","title":"General Edison","subtitle":"Documentation","severity":"","date":"2016-10-01T02:30","alertId":"482000","alertSource":"Combustion","receivedDateTime":"2016-10-01T11:16","caseNumber":"127587105","customer":"Sally Ride","serialNumber":"IL194893","dlnType":"DLN 6","model":"TTA3","formattedDate":"ASSIGNED"}]'
    }
  }

  render() {

    return (
      <px-inbox list-items={this.state.items}>
        {this.props.children}
      </px-inbox>
    );
  }
}

Inbox.propTypes = {
  items : PropTypes.array
}

export default Inbox;
