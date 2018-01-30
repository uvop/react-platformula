import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'src/component/modal';
import { InternalProvider } from './internals';

export default class ModalProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  }

  state = {
    mounted: false,
    element: undefined,
    onBackgroundPress: undefined,
  };

  mount = this.mount.bind(this);
  mount(element, { onBackgroundPress }) {
    this.setState({
      mounted: true,
      element,
      onBackgroundPress,
    });
  }

  unmount = this.unmount.bind(this);
  unmount() {
    this.setState({
      mounted: false,
      element: undefined,
      onBackgroundPress: undefined,
    });
  }

  renderModal() {
    const { mounted, element, onBackgroundPress } = this.state;
    if (mounted) {
      return (
        <Modal onBackgroundPress={onBackgroundPress}>
          {element}
        </Modal>
      );
    }
    return null;
  }

  render() {
    const { children } = this.props;

    return (
      <InternalProvider mount={this.mount} unmount={this.unmount}>
        {children}
        {this.renderModal()}
      </InternalProvider>
    );
  }
}
