// @flow
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './GridLayout.css';

class GridLayout extends PureComponent {

  static _gutters = { regular : '', flush : 'layout--flush', tiny : 'layout--tiny', small : 'layout--small', large : 'layout--large', huge : 'layout--huge' };
  static _alignments = { left: '', center : 'layout--center', right : 'layout--right' };
  static _verticals = { top: '', middle : 'layout--middle', bottom : 'layout--bottom', full : 'layout--full' };

  constructor(props) {
    super(props);

    this.state = {
      gutter: props.gutter,
      alignment: props.alignment,
      vertical: props.vertical
    }
  }

  get _style() {

    let gutter = GridLayout._gutters[this.state.gutter];
    let vertical = GridLayout._verticals[this.state.vertical];
    let alignment = GridLayout._alignments[this.state.alignment];

    return `layout ${alignment} ${vertical} ${gutter}`.trim();
  }

  render() {
    return (
      <div className={this._style}>
        {this.props.children}
      </div>
    );
  }
}

GridLayout.defaultProps = {
  gutter: 'regular',
  alignment: 'left',
  vertical: 'top',
}

GridLayout.propTypes = {
  gutter: PropTypes.oneOf(['regular', 'flush', 'tiny', 'small', 'large', 'huge']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  vertical: PropTypes.oneOf(['top', 'middle', 'bottom', 'full']),
}

export default GridLayout;
