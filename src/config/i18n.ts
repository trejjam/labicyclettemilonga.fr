import type { InitOptions } from 'i18next';
import commonEn from '@/assets/translations/common.en.json';
import commonFr from '@/assets/translations/common.fr.json';
import commonEs from '@/assets/translations/common.es.json';

export const locales = ['fr', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const i18nOptions = {
  fallbackLng: defaultLocale,
  ns: ['common'],
  defaultNS: 'common',
  preload: locales,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { common: commonEn },
    fr: { common: commonFr },
    es: { common: commonEs },
  },
  parseMissingKeyHandler: (key) => `?_${key}_?`,
  appendNamespaceToMissingKey: false,
} satisfies InitOptions;
