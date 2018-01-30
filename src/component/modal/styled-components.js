import { getCustom as getCustomBlock } from 'src/component/block';

export const Container = getCustomBlock({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0,
});

export const Background = getCustomBlock({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});
