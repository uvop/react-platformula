import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jsReactToCss from 'src/common/js-react-to-css';
import jss from 'jss';

class Image extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  render() {
    const { source, className } = this.props;

    return (
      <img
        alt=""
        src={source}
        className={className}
      />
    );
  }
}

export const getCustom = (style) => {
  const { classes } = jss.createStyleSheet({
    main: jsReactToCss(style),
  }).attach();

  return props => (
    <Image {...props} className={classes.main} />
  );
};

export default getCustom({});
