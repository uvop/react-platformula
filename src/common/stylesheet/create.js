import { StyleSheet } from 'react-native';
import getNameForIndex from './get-name-for-index';

export default (...styles) => {
  const stylesheet = StyleSheet.create((
    styles.reduce(
      (obj, style, i) => ({
        ...obj,
        [getNameForIndex(i)]: style,
      }),
      {},
    )
  ));

  return Array
    .from({ length: styles.length })
    .map((_, i) => stylesheet[getNameForIndex(i)]);
};
