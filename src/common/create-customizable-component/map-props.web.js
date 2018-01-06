export default ({
  onPress,
  stylesheet,
}) => ({
  className: stylesheet,
  onClick: onPress,
  style: onPress ? { cursor: 'pointer' } : undefined,
});
