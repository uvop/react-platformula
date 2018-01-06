import { Provider as DirectionProvider } from 'src/provider/direction';
import direction from 'src/constant/direction';

// eslint-disable-next-line no-undef
module.exports = Object.assign(DirectionProvider, {
  values: direction,
});
