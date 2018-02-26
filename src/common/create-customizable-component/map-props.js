export default ({
  stylesheets,
}, {
  style: styleProp,
  ...otherProps
}) => ({
  style: stylesheets.concat(styleProp !== undefined ? styleProp : []),
  ...otherProps,
});
