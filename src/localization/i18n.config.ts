import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './translations/en.json';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
});

export default i18n;
