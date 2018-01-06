import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createCustomizableComponent from 'src/common/create-customizable-component';
import stylesheetPropType from 'src/common/stylesheet/prop-types';

class Image extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    stylesheet: stylesheetPropType,
  };

  static defaultProps = {
    stylesheet: undefined,
  };

  render() {
    const {
      source,
      stylesheet,
    } = this.props;

    return (
      <img
        alt=""
        src={source}
        className={stylesheet}
      />
    );
  }
}

const {
  Component: BaseComponent,
  getCustom: _getCustom,
} = createCustomizableComponent(Image);

export default BaseComponent;
export const getCustom = _getCustom;
