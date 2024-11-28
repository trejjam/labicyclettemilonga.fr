import i18n from '@/lib/i18n.ts';
import { useMemo } from 'react';
import { Locale } from '@/config/i18n.ts';

interface Props {
  lng: Locale;
  ns?: string;
}

export function useTranslation({ lng, ns }: Props) {
  const i18nMemo = useMemo(() => i18n.cloneInstance({
    lng,
    ns,
  }), [lng, ns]);

  return { i18n: i18nMemo, t: i18nMemo.t };
}
