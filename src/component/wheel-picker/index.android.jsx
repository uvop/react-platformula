import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { WheelPicker as RNWheelPicker } from '@omerman/react-native-wheel-picker-android';
import { isTablet } from 'src/api/device-info';
import Color from 'color';
import { Hoc as DirectionHoc } from 'src/module/direction';
import directions, { propType as directionPropType } from 'src/constant/direction';

const fixSelectedTextColor = (color) => {
  if (['white', '#ffffff', '#fff'].indexOf(color) !== -1) {
    return '#fefefe';
  }
  return color;
};


const valuePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

@DirectionHoc(ctx => ({
  direction: ctx.value,
}))
class WheelPicker extends Component {
  static propTypes = {
    value: valuePropType,
    onValueChange: PropTypes.func,
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: valuePropType.isRequired,
    })),
    style: PropTypes.number.isRequired,
    itemStyle: PropTypes.shape({
      color: PropTypes.string,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.number,
      textAlign: PropTypes.string,
    }),
    direction: directionPropType,
  };

  static defaultProps = {
    value: undefined,
    onValueChange: undefined,
    values: [],
    itemStyle: {},
    direction: directions.ltr,
  };

  getTextAlign() {
    const {
      direction,
      itemStyle: {
        textAlign,
      },
    } = this.props;

    if (direction === directions.rtl) {
      if (textAlign === 'left') {
        return 'right';
      } else if (textAlign === 'right') {
        return 'left';
      }
    }
    return textAlign;
  }

  handleItemSelected = this.handleItemSelected.bind(this);

  handleItemSelected(e) {
    const { values, onValueChange } = this.props;
    if (onValueChange) {
      const { position: newValueIndex } = e;
      const { value: newValue } = values[newValueIndex];
      onValueChange(newValue, newValueIndex);
    }
  }

  render() {
    const {
      values, value, style, itemStyle,
    } = this.props;

    const valueIndex = values.findIndex(item => value === item.value);

    const itemColor = fixSelectedTextColor(itemStyle.color);

    return (
      <RNWheelPicker
        isCurved
        selectedItemPosition={valueIndex}
        data={values.map(({ label }) => label)}
        onItemSelected={this.handleItemSelected}
        style={style}
        selectedItemTextColor={itemColor}
        itemTextColor={Color(itemColor).darken(0.4).hex()}
        itemTextSize={((itemStyle.fontSize || 16) * (isTablet ? 1.3 : 2.6))}
        itemTextFontFamily={itemStyle.fontFamily}
        itemTextAlign={this.getTextAlign()}
      />
    );
  }
}

export const getCustom = (style = {}) => {
  const {
    color, fontSize, fontFamily, textAlign, ...otherStyle
  } = style;
  const itemStyle = {
    color, fontSize, fontFamily, textAlign,
  };

  const {
    main: customStyle,
  } = StyleSheet.create({
    main: {
      ...otherStyle,
      height: isTablet ? 320 : 160,
      width: '100%',
    },
  });

  return props => (
    <WheelPicker {...props} style={customStyle} itemStyle={itemStyle} />
  );
};

export default getCustom();
