import jss from 'jss';
import jsReactToCssKey from './js-react-to-css-key';
import jsReactToCssValue from './js-react-to-css-value';
import getNameForIndex from './get-name-for-index';

export default (...styles) => {
  const { classes } = jss.createStyleSheet((
    styles.reduce(
      (obj, style, i) => ({
        ...obj,
        [getNameForIndex(i)]: jsReactToCssKey(jsReactToCssValue(style)),
      }),
      {},
    )
  )).attach();

  return Array
    .from({ length: styles.length })
    .map((_, i) => classes[getNameForIndex(i)]);
};
