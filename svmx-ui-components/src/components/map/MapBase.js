
import React, { Component } from 'react';

import './css/map-leaflet-style.css';
import './css/map-style.css';

class MapBase extends Component {

  render() {

    return (

      <dom-module id="px-map">

          <div id="map"></div>
          <content select="*"></content>
        
      </dom-module>
    );
  }
}

export default MapBase;
