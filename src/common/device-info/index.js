import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import locales from './locale';

const { height, width } = Dimensions.get('window');
const deviceLocale = DeviceInfo.getDeviceLocale();
const isHebrew = (__IOS__ ? deviceLocale.startsWith('he-') : (['iw-IL', 'he-IL'].indexOf(deviceLocale) !== -1));

export const locale = isHebrew ? locales.hebrew : locales.english;
export const ltr = !isHebrew;
export const clientId = DeviceInfo.getUniqueID();
export const userAgent = DeviceInfo.getUserAgent();
export const dimensions = { width, height };
export const isTablet = DeviceInfo.isTablet();
