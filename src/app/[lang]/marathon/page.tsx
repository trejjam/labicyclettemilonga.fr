import { Params } from '@/app/[lang]/page.tsx';
import { use } from 'react';
import { defaultLocale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';

export default function GenericMarathonPage({ params }: { params: Params }) {
  const lang = use(params).lang ?? defaultLocale;

  const { t } = useTranslation({ lng: lang });

  return <>{t('marathon')}</>;
}
