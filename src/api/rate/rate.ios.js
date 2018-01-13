import * as StoreReview from 'react-native-store-review';

export default () => {
  // This API is only available on iOS 10.3 or later
  if (StoreReview.isAvailable) {
    StoreReview.requestReview();
  }
};
