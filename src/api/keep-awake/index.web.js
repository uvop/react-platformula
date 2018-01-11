import { Component } from 'react';

export default class KeepAwakeWeb extends Component {
  static activate() {
    // Enable navigation prompt
    window.onbeforeunload = () => true;
  }

  static deactivate() {
    // Remove navigation prompt
    window.onbeforeunload = null;
  }

  componentWillMount() {
    KeepAwakeWeb.activate();
  }

  componentWillUnmount() {
    KeepAwakeWeb.deactivate();
  }

  render() {
    return null;
  }
}
