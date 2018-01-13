import { Alert, Linking } from 'react-native';
import { ANDROID_PACKAGE_STORE } from './index';

export default ({
  dialogOptions: {
    title,
    rateMessage,
    acceptActionText,
    declineActionText,
    laterActionText,
    onLaterClick,
    onAcceptClick,
    onDeclineClick,
  },
  packageName,
  packageStore,
}) => {
  if (__DEV__ && !packageName) {
    throw new Error('Rate:: android packageName is required');
  }

  if (__DEV__ && Object.values(ANDROID_PACKAGE_STORE).indexOf(packageStore) === -1) {
    throw new Error('Rate:: android packageStore must be defined correctly.');
  }

  Alert.alert(
    title,
    rateMessage,
    [
      { text: declineActionText, onPress: onDeclineClick },
      { text: laterActionText, onPress: onLaterClick },
      {
        text: acceptActionText,
        onPress: () => {
          if (onAcceptClick) {
            onAcceptClick();
          }
          let url;
          switch (packageStore) {
            case ANDROID_PACKAGE_STORE.GOOGLE:
            default:
              url = `http://play.google.com/store/apps/details?id=${packageName}`;
              break;
            case ANDROID_PACKAGE_STORE.AMAZON:
              url = `amzn://apps/android?p=${packageName}`;
              break;
          }

          Linking.canOpenURL(url).then((supported) => {
            if (supported) {
              Linking.openURL(url);
            }
          });
        },
        style: 'cancel',
      },
    ],
  );
};
