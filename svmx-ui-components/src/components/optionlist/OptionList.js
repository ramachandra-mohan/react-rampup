import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionList extends Component {

  constructor(props) {
    super(props);

    console.log( 'OptionList::constructor() : props=' + JSON.stringify( this.props ) );
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    console.log( 'OptionList::handleChange() : ' + e.target.value );

    if( this.props.handleChange ) {
      this.props.handleChange( e.target.value || -1 );
    }
  }

  render() {

    console.log( 'OptionList::render() : items=' + JSON.stringify( this.props.items ) );

    let items = undefined;
    if( this.props.items ) {

      items = this.props.items.map((item) => {
        return (
          <option value={item.key} key={item.key}>{item.value}</option>
        );
      });
    }

    return (
      <div>
        <select className='combobox form-control'
                value={this.props.selected}
                onChange={this.handleChange}>
                <option></option>
          {items}
        </select>
      </div>
    );
  }
}

OptionList.propTypes = {

  className: PropTypes.string,
  selected: PropTypes.string,
  items: PropTypes.array.isRequired,
  handleChange: PropTypes.func
};

export default OptionList;
