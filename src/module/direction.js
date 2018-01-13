import { Provider as DirectionProvider, Hoc, RenderChildren } from 'src/provider/direction';
import direction from 'src/constant/direction';

// eslint-disable-next-line no-undef
module.exports = Object.assign(DirectionProvider, {
  values: direction,
  Hoc,
  RenderChildren,
});
