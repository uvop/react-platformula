import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Background } from './styled-components';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onBackgroundPress: PropTypes.func,
  };

  static defaultProps = {
    onBackgroundPress: undefined,
  };

  render() {
    const { children, onBackgroundPress } = this.props;
    return (
      <Container>
        <Background onPress={onBackgroundPress} />
        {children}
      </Container>
    );
  }
}
