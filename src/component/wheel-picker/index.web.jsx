import React, { Component } from 'react';
import PropTypes from 'prop-types';

const valuePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

class WheelPicker extends Component {
  static propTypes = {
    value: valuePropType,
    onValueChange: PropTypes.func,
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: valuePropType.isRequired,
    })),
  };
  static defaultProps = {
    value: undefined,
    onValueChange: undefined,
    values: [],
  };

  handleSelectChange = this.handleSelectChange.bind(this);

  handleSelectChange(e) {
    const { onValueChange, values } = this.props;

    if (onValueChange) {
      const { value: newValue } = e.target;
      const newValueIndex = values.findIndex(({ value }) => value === newValue);
      onValueChange(newValue, newValueIndex);
    }
  }

  renderItems() {
    const { values } = this.props;

    return values.map(({ label, value }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ));
  }

  render() {
    const { value } = this.props;

    return (
      <select value={value} onChange={this.handleSelectChange}>
        {this.renderItems()}
      </select>
    );
  }
}

export const getCustom = () => (
  props => (
    <WheelPicker {...props} />
  )
);

export default getCustom();
