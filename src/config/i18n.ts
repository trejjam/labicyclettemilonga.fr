import type { InitOptions } from 'i18next';
import commonEn from '@/assets/translations/common.en.json';
import commonFr from '@/assets/translations/common.fr.json';
import commonEs from '@/assets/translations/common.es.json';
import notFoundEn from '@/assets/translations/not-found.en.json';
import notFoundFr from '@/assets/translations/not-found.fr.json';
import notFoundEs from '@/assets/translations/not-found.es.json';

export const locales = ['fr', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const i18nOptions = {
  fallbackLng: defaultLocale,
  ns: [
    'common',
    'not-found',
  ],
  defaultNS: 'common',
  preload: locales,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { common: commonEn, 'not-found': notFoundEn },
    fr: { common: commonFr, 'not-found': notFoundFr },
    es: { common: commonEs, 'not-found': notFoundEs },
  },
  parseMissingKeyHandler: (key) => `?_${key}_?`,
  appendNamespaceToMissingKey: false,
} satisfies InitOptions;
