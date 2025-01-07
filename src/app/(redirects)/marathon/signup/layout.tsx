'use client';

import Html from '@/components/Html.tsx';
import { useTranslation } from '@/hooks/use-translation.ts';
import { defaultLocale } from '@/config/i18n.ts';
import { redirect } from 'next/navigation';

export default function MarathonSignupLayout() {
  const { i18n } = useTranslation({ lng: defaultLocale });

  redirect(
    'https://docs.google.com/forms/d/e/1FAIpQLSddi5kG8w0C7QAFlcuMUcj-a7ZrLQ_NxprALHEWrR_xSkJIeg/viewform'
  );

  return (
    <Html i18n={i18n}>
      <body></body>
    </Html>
  );
}
