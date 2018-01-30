import { Component } from 'react';
import PropTypes from 'prop-types';
import { InternalHoc, internalPropTypes } from './internals';

@InternalHoc(({ mount, unmount }) => ({ mount, unmount }))
export default class Modal extends Component {
  static propTypes = {
    ...internalPropTypes,
    children: PropTypes.node.isRequired,
    onBackgroundPress: PropTypes.func,
  }

  static defaultProps = {
    onBackgroundPress: undefined,
  };

  componentDidMount() {
    const { children, onBackgroundPress } = this.props;
    this.props.mount(children, { onBackgroundPress });
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    return null;
  }
}
