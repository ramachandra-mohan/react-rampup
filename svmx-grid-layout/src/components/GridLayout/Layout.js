// @flow
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Layout extends PureComponent {

  static _verticals = { top: '', middle : 'layout--middle', bottom : 'layout--bottom', full : 'layout--full' };

  constructor(props) {
    super(props);

    this.state = {
      width: props.width || '1/3',
      vertical: props.vertical || 'top'
    }
  }

  get _style() {

    let vertical = Layout._verticals[this.state.vertical];
    return `layout__item u-${this.state.width} ${vertical}`.trim();
  }

  render() {
    return (
      <div className={this._style}>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  width: PropTypes.string.isRequired,
  vertical: PropTypes.oneOf(['top', 'middle', 'bottom', 'full']),
}

export default Layout;
