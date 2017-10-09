// @flow
/**
 * The SVMX UI Layout module defines the 'layout' for SVMX UI.
 *
 * Eg.
 * <Layout verticals='middle' width='1/3'/>
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Layout extends PureComponent {

  /**
   * Static variable to hold supported verticals.
   */
  static _verticals = { top: '', middle : 'layout--middle', bottom : 'layout--bottom', full : 'layout--full' };

  /**
   * Class constructor to create instance of this class with state.
   */
  constructor(props) {
    super(props);

    /*
     * Initializing state with width and vertical properties.
     */
    this.state = {
      width: props.width, vertical: props.vertical
    }
  }

  /**
   * This method is used to retrieve style component for this grid layout.
   */
  get _style() {

    let vertical = Layout._verticals[this.state.vertical];
    return `layout__item u-${this.state.width} ${vertical}`.trim();
  }

  /**
   * Render method to return layout component with configured style.
   */
  render() {
    return (
      <div className={this._style}>
        {this.props.children}
      </div>
    );
  }
}

/**
 * Default props values for gutter, alignment and vertical attributes.
 */
Layout.defaultProps = {
  vertical: 'top', width: '1/3'
}

/**
 * Prop types and list of supported values.
 */
Layout.propTypes = {
  width: PropTypes.string.isRequired,
  vertical: PropTypes.oneOf(['top', 'middle', 'bottom', 'full']),
}

export default Layout;
