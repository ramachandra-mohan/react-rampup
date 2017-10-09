import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {

  /**
   * Class constructor to create the class instance and initialize the state.
   */
  constructor(props) {
    super(props);

    console.debug( 'Dropdown::constructor() : props=', props );

    // Set selected item if configured otherwise select first element of the item.
    this.state = {
      selected : props.selected || ( ( props.items ) ? props.items[0].key : undefined ),
    }
  }

  /**
   * Selection change handler to update selected state and trigger callback function if any.
   */
  handleChange = (e) => {

    console.info( 'Dropdown::handleChange() : enter; ', e.target.value );

    this.selected = e.target.value;

    if( this.props.handleChange ) {
      this.props.handleChange( e.target.value || undefined );
    }

    console.info( 'Dropdown::handleChange() : exit' );
  }

  /**
   * This method is used to retrieve current selected item.
   */
  get selected() {
    return this.state.selected;
  }

  /**
   * This method is used to set selected item and update the state.
   */
  set selected( value ) {
    this.setState( {selected:value});
  }

  /**
   * Check whether or not the component is disabled.
   */
  get _disabled() {

    if( this.props.hasOwnProperty('disabled') ) {
      return(true);
    }
    return(false);
  }

  /**
   * This method is used to return class names configured for this component.
   */
  get _style() {
    return `${this.props.className}`;
  }

  /**
   * This method is used to build option elements for given items.
   */
  _buildOptions = () => {

    console.debug( 'Dropdown::_buildOptions() : enter; items=',  this.props.items );

    let options = undefined;
    if( this.props.items ) {

      options = this.props.items.map((option) => {
        return (
          <option value={option.key} key={option.key}>{option.value}</option>
        );
      });
    }

    console.debug( 'Dropdown::_buildOptions() : exit; ', options );

    return options;
  }

  /**
   * Render method to return the components to be rendered.
   */
  render() {

    console.debug( 'Dropdown::render() : items=',  this.props.items );

    // implement dropdown using div and css in case we need more functionalities.
    return (
      <div>
        <select className={this._style}
                value={this.selected}
                onChange={this.handleChange}
                disabled={this._disabled}>
          {this._buildOptions()}
        </select>
      </div>
    );
  }
}

Dropdown.propTypes = {

  className: PropTypes.string,
  selected: PropTypes.string,
  handleChange: PropTypes.func,

  items: PropTypes.array.isRequired,
};

export default Dropdown;
