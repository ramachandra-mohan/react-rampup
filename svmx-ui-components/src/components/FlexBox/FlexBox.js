// @flow
/**
 * The SVMX UI Layout module defines the 'flex box layout' for SVMX UI.
 *
 * Eg.
 * <FlexBox direction='row' alignment='middle' justify='center'>
 *  ...components
 * </FlexBox>
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './FlexBox.css';

class FlexBox extends PureComponent {

  /**
   * Static variable to hold supported directions.
   */
  static _directions = { none : '', row : 'flex--row', 'row-reverse' : 'flex--row flex--row--rev', column : 'flex--col', 'column-reverse' : 'flex--col flex--col--rev'};

  /**
   * Static variable to hold supported justifys.
   */
  static _justifys = { none: '', left: 'flex--left', center : 'flex--left', right : 'flex--left', justify : 'flex--justify', spaced : 'flex--spaced' };

  /**
   * Static variable to hold supported alignment.
   */
  static _alignments = { none: '', top: 'flex--top', middle : 'flex--middle', bottom : 'flex--bottom', stretch : 'flex--stretch', baseline : 'flex--baseline' };

  /**
   * Class constructor to create instance of this class with state.
   */
  constructor(props) {
    super(props);

    /*
     * Initializing state with gutter, alignment and vertical properties.
     */
    this.state = {
      direction: props.direction, alignment: props.alignment, justify: props.justify
    }
  }

  /**
   * This method is used to retrieve style component for this flex box layout.
   */
  get _style() {

    let direction = FlexBox._directions[this.state.direction];
    let justify = FlexBox._justifys[this.state.justify];
    let alignment = FlexBox._alignments[this.state.alignment];

    return `flex ${alignment} ${justify} ${direction}`.trim();
  }

  /**
   * Render method to return grid layout component with configured style.
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
 * Default props values for direction, alignment and justify attributes.
 */
FlexBox.defaultProps = {
  direction : 'none', justify : 'none', alignment : 'none'
}

/**
 * Prop types and list of supported values.
 */
FlexBox.propTypes = {
  direction : PropTypes.oneOf(['none', 'row', 'row-reverse' ,'column', 'column-reverse']),
  justify : PropTypes.oneOf(['none', 'left', 'center', 'right', 'justify', 'spaced']),
  alignment : PropTypes.oneOf(['none','top', 'middle', 'bottom', 'stretch', 'baseline']),
}

export default FlexBox;
