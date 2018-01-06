import jss from 'jss';
import jsReactToCss from './js-react-to-css';
import getNameForIndex from './get-name-for-index';

export default (...styles) => {
  const { classes } = jss.createStyleSheet((
    styles.reduce(
      (obj, style, i) => ({
        ...obj,
        [getNameForIndex(i)]: jsReactToCss(style),
      }),
      {},
    )
  ));

  return Array
    .from({ length: styles.length })
    .map((_, i) => classes[getNameForIndex(i)]);
};
