const shorthandToLong = str => str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

export default style => Object.keys(style).reduce((obj, key) => ({
  ...obj,
  [shorthandToLong(key)]: style[key],
}), {});
