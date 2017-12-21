import React, { Component } from 'react';
import jsReactToCss from 'src/common/js-react-to-css';
import PropTypes from 'prop-types';
import jss from 'jss';

class ScrollBlock extends Component {
  static propTypes = {
    style: PropTypes.shape({}), // inline-style
    children: PropTypes.node,
    className: PropTypes.string,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    style: undefined,
    children: undefined,
    className: undefined,
    onPress: undefined,
  };

  render() {
    const {
      children, className, onPress, style,
    } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={className}
        onClick={onPress}
        style={{
          ...style,
          cursor: onPress ? 'pointer' : undefined,
        }}
      >
        {children}
      </div>
    );
  }
}


export const getCustom = (styles) => {
  const { classes } = jss.createStyleSheet({
    main: jsReactToCss({
      ...styles,
      display: 'block',
      overflowY: 'scroll',
      '-webkit-overflow-scrolling': 'touch',
    }),
  }).attach();

  return props => (
    <ScrollBlock {...props} className={classes.main} />
  );
};

export default getCustom({});
