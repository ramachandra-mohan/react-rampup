// @flow
/**
 * The SVMX UI Layout module defines the 'grid layout' for SVMX UI.
 * Layout items can be autosized, or given a specific width, and layouts
 * reflow responsively on smaller viewports.
 *
 * Eg.
 * <GridLayout gutters='large' alignment='center' vertical='middle'>
 *  <Layout />
 * </GridLayout>
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './GridLayout.css';

class GridLayout extends PureComponent {

  /**
   * Static variable to hold supported gutters.
   */
  static _gutters = { regular : '', flush : 'layout--flush', tiny : 'layout--tiny', small : 'layout--small', large : 'layout--large', huge : 'layout--huge'};

  /**
   * Static variable to hold supported alignments.
   */
  static _alignments = { left: '', center : 'layout--center', right : 'layout--right' };

  /**
   * Static variable to hold supported verticals.
   */
  static _verticals = { top: '', middle : 'layout--middle', bottom : 'layout--bottom', full : 'layout--full' };

  /**
   * Class constructor to create instance of this class with state.
   */
  constructor(props) {
    super(props);

    console.debug( 'GridLayout::constructor(props) : props=',  props );

    /*
     * Initializing state with gutter, alignment and vertical properties.
     */
    this.state = {
      gutter: props.gutter, alignment: props.alignment, vertical: props.vertical
    }

    console.info( 'GridLayout::constructor(props) : state=', this.state );
  }

  /**
   * This method is used to retrieve style component for this grid layout.
   */
  get _style() {

    console.debug( 'GridLayout::_style() - enter' );

    let gutter = GridLayout._gutters[this.state.gutter];
    let vertical = GridLayout._verticals[this.state.vertical];
    let alignment = GridLayout._alignments[this.state.alignment];

    let style = `layout ${alignment} ${vertical} ${gutter}`.trim();

    console.info( 'GridLayout::_style() : style=', style );
    console.debug( 'GridLayout::_style() - exit' );

    return style;
  }

  /**
   * Render method to return grid layout component with configured style.
   */
  render() {
    console.debug( 'GridLayout::render()' );
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
GridLayout.defaultProps = {
  gutter: 'regular', alignment: 'left', vertical: 'top'
}

/**
 * Prop types and list of supported values.
 */
GridLayout.propTypes = {
  gutter: PropTypes.oneOf(['regular', 'flush', 'tiny', 'small', 'large', 'huge']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  vertical: PropTypes.oneOf(['top', 'middle', 'bottom', 'full']),
}

export default GridLayout;
