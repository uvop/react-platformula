import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {
  static propTypes = {
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    style: PropTypes.shape({}),
    selectTextOnFocus: PropTypes.bool,
  };

  static defaultProps = {
    keyboardType: undefined,
    value: '',
    style: undefined,
    selectTextOnFocus: false,
  };

  render() {
    const {
      value, onValueChange, keyboardType, selectTextOnFocus, style,
    } = this.props;
    return (
      <TextInput
        onChangeText={onValueChange}
        value={value}
        keyboardType={keyboardType}
        style={style}
        underlineColorAndroid="transparent"
        selectTextOnFocus={selectTextOnFocus}
      />
    );
  }
}

export const getCustom = (style) => {
  const styles = StyleSheet.create({
    main: style,
  });

  return props => (
    <Input {...props} style={styles.main} />
  );
};

export default getCustom({});
