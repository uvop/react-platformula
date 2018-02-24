import jsReactToCss from 'src/common/stylesheet/js-react-to-css';

export default ({
  stylesheets,
}, {
  onPress,
  style: styleProp,
  ...otherProps
}) => ({
  className: stylesheets.join(' '),
  onClick: onPress,
  style: {
    cursor: onPress ? 'pointer' : undefined,
    ...(styleProp !== undefined ? jsReactToCss(styleProp) : {}),
  },
  ...otherProps,
});
