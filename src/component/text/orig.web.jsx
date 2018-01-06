import React, { Component } from 'react';
import jsReactToCss from 'src/common/js-react-to-css';
import PropTypes from 'prop-types';
import jss from 'jss';

const {
  classes: {
    text: textClass,
  },
} = jss.createStyleSheet({
  text: jsReactToCss({
    display: 'block',
  }),
}).attach();

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    children: '',
    className: undefined,
    onPress: undefined,
  };

  render() {
    const { children, className, onPress } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span
        className={className ? `${textClass} ${className}` : textClass}
        onClick={onPress}
        style={{
          cursor: onPress ? 'pointer' : undefined,
        }}
      >
        {children}
      </span>
    );
  }
}

export const getCustom = (styles) => {
  const { classes } = jss.createStyleSheet({
    main: jsReactToCss(styles),
  }).attach();

  return props => (
    <Text {...props} className={classes.main} />
  );
};

export default getCustom({});
