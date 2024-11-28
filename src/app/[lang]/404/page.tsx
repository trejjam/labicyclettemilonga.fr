'use client';

import { Params } from '@/app/[lang]/page.tsx';
import { use } from 'react';
import { defaultLocale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';
import { notFound } from 'next/navigation';

export default function GenericNotFound({ params }: { params: Params }) {
  const lang = use(params).lang ?? defaultLocale;

  const { t } = useTranslation({ lng: lang, ns: 'not-found' });

  notFound();

  return (
    <main>
      <h2>{t('title')}</h2>
      <p>Could not find requested resource</p>
    </main>
  );
}
