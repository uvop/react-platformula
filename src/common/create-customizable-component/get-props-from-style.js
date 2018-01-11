export default ({
  pointerEvents,
  ...otherStyle
}) => ({
  style: otherStyle,
  props: {
    pointerEvents,
  },
});
