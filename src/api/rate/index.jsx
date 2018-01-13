import Rate from './rate';

export const ANDROID_PACKAGE_STORE = {
  GOOGLE: 'GOOGLE',
  AMAZON: 'AMAZON',
};

export default ({
  androidPackageName,
  androidPackageStore = ANDROID_PACKAGE_STORE.GOOGLE,
  androidDialogOptions,
}) => {
  if (__ANDROID__) {
    Rate({
      packageName: androidPackageName,
      packageStore: androidPackageStore,
      dialogOptions: androidDialogOptions,
    });
  } else {
    Rate();
  }
};
