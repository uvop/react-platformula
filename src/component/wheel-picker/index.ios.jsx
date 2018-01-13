import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, StyleSheet } from 'react-native';
import { Hoc as DirectionHoc } from 'src/provider/direction';
import directions, { propType as directionPropType } from 'src/constant/direction';

const valuePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

const {
  left: leftStyle,
  right: rightStyle,
} = StyleSheet.create({
  left: {
    textAlign: 'center',
    marginRight: -75,
  },
  right: {
    textAlign: 'right',
  },
});

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
    itemStyle: PropTypes.number.isRequired,
    direction: directionPropType,
    textAlign: PropTypes.string,
  };
  static defaultProps = {
    value: undefined,
    onValueChange: undefined,
    values: [],
    direction: directions.ltr,
    textAlign: undefined,
  };

  getCustomAlignmentStyle() {
    const { direction, textAlign } = this.props;

    if (
      (direction === directions.rtl && textAlign === 'left') ||
      (direction === directions.ltr && textAlign === 'right')
    ) {
      return rightStyle;
    } else if (
      (direction === directions.ltr && textAlign === 'left') ||
      (direction === directions.rtl && textAlign === 'right')
    ) {
      return leftStyle;
    }

    return undefined;
  }

  renderItems() {
    const { values } = this.props;

    return values.map(({ label, value }) => (
      <Picker.Item label={label} value={value} key={value} />
    ));
  }

  render() {
    const {
      value, onValueChange, style, itemStyle,
    } = this.props;

    return (
      <Picker
        style={style}
        itemStyle={[itemStyle, this.getCustomAlignmentStyle()]}
        selectedValue={value}
        onValueChange={onValueChange}
      >
        {this.renderItems()}
      </Picker>
    );
  }
}

export const getCustom = (style = {}) => {
  const {
    color,
    fontSize,
    fontFamily,
    textAlign,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ...otherStyle
  } = style;
  const itemStyle = {
    color,
    fontSize,
    fontFamily,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  const {
    main: customStyle,
    item: customItemStyle,
  } = StyleSheet.create({
    main: otherStyle,
    item: itemStyle,
  });

  return props => (
    <WheelPicker {...props} style={customStyle} itemStyle={customItemStyle} textAlign={textAlign} />
  );
};

export default getCustom();
