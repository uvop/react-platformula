import React from 'react';
import { TextInput as ReactNativeTextInput } from 'react-native';
import TestRenderer from 'react-test-renderer';
import TextInput from './index.jsx';

let Driver;

describe('TextInput', () => {
  let driver;

  beforeEach(() => {
    driver = new Driver();
  });

  it('should render ReactNativeTextInput', () => {
    driver
      .render()
      .result.inputIsRendered();
  });

  it('should pass value to TextInput', () => {
    const mockInputValue = '777';

    driver
      .given.inputValue(mockInputValue)
      .render()
      .result.inputIsRenderedWithValue(mockInputValue);
  });

  it('should have a required prop onValueChange', () => {
    driver.given.noOnValueChangeMethod();

    driver
      .render()
      .result.errorsOccured();
  });

  it('should call props.onValueChange when TextInput.props.onChangeText is called', () => {
    const mockNewTextValue = '123';

    driver
      .render()
      .when.textChanges(mockNewTextValue)
      .result.onValueChangeCalledTimes(1)
      .result.onValueChangeCalledWith(mockNewTextValue);
  });
});

Driver = class {
  _props = {
    onValueChange: jest.fn(),
  };

  _testRenderer;

  _chain(method) {
    return (...args) => {
      method(...args);
      return this;
    };
  }

  get _reactNativeTextInput() {
    return this._testRenderer.root.findByType(ReactNativeTextInput);
  }

  render = this._chain(() => {
    this._testRenderer = TestRenderer.create(<TextInput {...this._props} />);
  });

  given = {
    noOnValueChangeMethod: this._chain(() => {
      this._props.onValueChange = undefined;
    }),
    inputValue: this._chain((value) => {
      this._props.value = value;
    }),
  }

  when = {
    textChanges: this._chain((newText) => {
      this._reactNativeTextInput.props.onChangeText(newText);
    }),
  }

  result = {
    inputIsRendered: this._chain(() => {
      expect(this._reactNativeTextInput).toBeDefined();
    }),
    onValueChangeCalledTimes: this._chain((times) => {
      expect(this._props.onValueChange).toHaveBeenCalledTimes(times);
    }),
    onValueChangeCalledWith: this._chain((...args) => {
      expect(this._props.onValueChange).toHaveBeenCalledWith(...args);
    }),
    inputIsRenderedWithValue: this._chain((value) => {
      expect(this._reactNativeTextInput.props.value).toBe(value);
    }),
    errorsOccured: this._chain(() => {
      errorHandler.expectConsoleErros();
    }),
  }
};
