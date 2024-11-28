import { useTranslation } from '@/hooks/use-translation.ts';
import { defaultLocale, Locale } from '@/config/i18n.ts';
import { use } from 'react';

export type Params = Promise<{ lang: Locale }>;

export default function GenericHomePage({ params }: { params: Params }) {
  const lang = use(params).lang ?? defaultLocale;

  const { t } = useTranslation({ lng: lang });

  return <>{t('main')}</>;
}
