import uuid from 'uuid/v4';
import locales from './locale';

const { width, height } = window.screen;

let clientIdInStorage;
if (typeof localStorage !== 'undefined') {
  clientIdInStorage = localStorage.getItem('clientId');
  if (!clientIdInStorage) {
    clientIdInStorage = uuid();
    localStorage.setItem('clientId', clientIdInStorage);
  }
}

export const locale = locales.english;
export const ltr = locale === locales.english;
export const clientId = clientIdInStorage;
export const { userAgent } = navigator;
export const dimensions = { width, height };
export const isTablet = false;
