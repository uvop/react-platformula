export default ({
  stylesheets,
}, {
  onPress,
  ...otherProps
}) => ({
  className: stylesheets.join(' '),
  onClick: onPress,
  style: onPress ? { cursor: 'pointer' } : undefined,
  ...otherProps,
});
