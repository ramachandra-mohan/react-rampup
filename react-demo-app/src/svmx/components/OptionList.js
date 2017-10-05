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

    console.log( 'OptionList::render() : options=' + JSON.stringify( this.props.options ) );

    let options = undefined;
    if( this.props.options ) {

      options = this.props.options.map((option) => {
        return (
          <option value={option.key} key={option.key}>{option.value}</option>
        );
      });
    }

    return (
      <div>
        <select className='combobox form-control'
                value={this.props.selected}
                onChange={this.handleChange}>
                <option></option>
          {options}
        </select>
      </div>
    );
  }
}

OptionList.propTypes = {

  className: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func
};

export default OptionList;
