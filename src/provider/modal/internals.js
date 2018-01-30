import createReactProvider from 'create-react-provider';
import PropTypes from 'prop-types';

const propTypes = {
  mount: PropTypes.func.isRequired,
  unmount: PropTypes.func.isRequired,
};

const {
  Provider,
  Hoc,
} = createReactProvider(propTypes);

export const internalPropTypes = propTypes;
export const InternalProvider = Provider;
export const InternalHoc = Hoc;
