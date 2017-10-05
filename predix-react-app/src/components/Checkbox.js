
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected : this.props.hasOwnProperty('selected'),
      disabled : this.props.hasOwnProperty('disabled'),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    this.setState({selected : !this.state.selected});
    this.props.handleChange();
  }

  render() {

    return (
      <div>
        <input id={this.props.id} type="checkbox" checked={this.state.selected} disabled={this.state.disabled} onChange={this.handleChange} className='u-mt'/>
        <label className="label--inline" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label : PropTypes.string.isRequired,
  handleChange : PropTypes.func.isRequired
}

export default Checkbox;
