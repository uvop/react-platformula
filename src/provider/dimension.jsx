import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createReactProvider from 'create-react-provider';
import { Dimensions } from 'react-native';

const {
  Provider: InternalProvider,
  Hoc: InternalHoc,
  RenderChildren: InternalRenderChildren,
} = createReactProvider({
  getValue: PropTypes.func,
  registerValueChange: PropTypes.func,
  unregisterValueChange: PropTypes.func,
});

class DimensionProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  }

  componentWillMount() {
    this.getValue = this.getValue.bind(this);
    this.onDimensionChange = this.onDimensionChange.bind(this);
    this.registerValueChange = this.registerValueChange.bind(this);
    this.unregisterValueChange = this.unregisterValueChange.bind(this);

    this.value = Dimensions.get('window');
    this.onChangeArr = [];

    Dimensions.addEventListener('change', this.onDimensionChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onDimensionChange);
  }

  onDimensionChange(newValue) {
    this.value = newValue;
    this.onChangeArr.forEach(fn => fn());
  }

  getValue() {
    return this.value;
  }

  registerValueChange(onChange) {
    this.onChangeArr = [
      ...this.onChangeArr,
      onChange,
    ];
  }

  unregisterValueChange(onChange) {
    this.onChangeArr = this.onChangeArr.filter(fn => fn === onChange);
  }

  render() {
    const { children } = this.props;

    return (
      <InternalProvider
        getValue={this.getValue}
        registerValueChange={this.registerValueChange}
        unregisterValueChange={this.unregisterValueChange}
      >
        {children}
      </InternalProvider>
    );
  }
}

export const Provider = DimensionProvider;
export const Hoc = InternalHoc;
export const RenderChildren = InternalRenderChildren;
