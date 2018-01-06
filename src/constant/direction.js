import PropTypes from 'prop-types';

const direction = {
  ltr: 'ltr',
  rtl: 'rtl',
};

export default direction;

export const propType = PropTypes.oneOf(Object.keys(direction).map(k => direction[k]));
