
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/style.css';

class Tile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered : false,
    }

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);
    this._checkHovered = this._checkHovered.bind(this);
  }

  onMouseEnter(e) {
    this.setState( {hovered: true} );
  }

  onMouseExit(e) {
    this.setState( {hovered: false} );
  }

  _checkHovered() {

    if( this.state.hovered ) {
      return('overlay hovered');
    }
    return('overlay');
  }

  render() {

    return (
      <div className="tile__container">
        <div id="tile" className="tile">
          <div id="thumbnail" className="thumbnail">
            <slot name="thumbnail"></slot>
          </div>
          <div className="title epsilon"><span className="title-span truncate">{this.props.title}</span></div>
        </div>
        <div id="overlay" className={this._checkHovered()} onMouseOver={this.onMouseEnter} onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseExit}>
          <div className="title epsilon"><span className="title-span truncate">{this.props.title}</span></div>
          <div className="text">{this.props.description}</div>
          <div className="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Tile;
