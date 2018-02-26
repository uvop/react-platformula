const valueByKey = (val, key, style) => {
  if (key === 'transform') {
    return val
      .map((
        transformObj => Object.entries(transformObj)
          .map(([transformName, transformValue]) => `${transformName}(${typeof transformValue === 'number' ? `${transformValue}px` : transformValue})`)
          .join(' ')
      )).join(' ');
  } else if (key === 'flex') {
    let flexBasis = 'auto';
    if (style.width !== undefined) {
      if (typeof style.width === 'number') {
        flexBasis = `${style.width}px`;
      } else {
        flexBasis = `${style.width}`;
      }
    } else if (style.height !== undefined) {
      if (typeof style.height === 'number') {
        flexBasis = `${style.height}px`;
      } else {
        flexBasis = `${style.height}`;
      }
    }
    return `${val} ${val} ${flexBasis}`;
  } else if (key === 'fontSize') {
    return `${val / 16}rem`;
  } else if (typeof val === 'number' && ['opacity', 'zIndex'].indexOf(key) === -1) {
    return `${val}px`;
  }
  return val;
};

const autoBorderStyleIfNeeded = style => ((
  style.borderWidth !== undefined ||
  style.borderTopWidth !== undefined ||
  style.borderRightWidth !== undefined ||
  style.borderLeftWidth !== undefined ||
  style.borderBottomWidth !== undefined
) ? ({
    borderStyle: 'solid',
    borderWidth: 0,
    ...style,
  }) : style);

const transformStyle = style => Object.keys(style).reduce((obj, key) => ({
  ...obj,
  [key]: valueByKey(style[key], key, style),
}), {});

export default style => (
  transformStyle(autoBorderStyleIfNeeded(style))
);
