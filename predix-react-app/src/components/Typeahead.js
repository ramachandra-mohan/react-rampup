
import React, { Component } from 'react';

class Typeahead extends Component {

  render() {

    return (
       <px-typeahead placeholder="Enter your search query" prefetch-url="https://www.predix-ui.com/px-typeahead/px-typeahead/countries.json"></px-typeahead>
    );
  }
}

export default Typeahead;
