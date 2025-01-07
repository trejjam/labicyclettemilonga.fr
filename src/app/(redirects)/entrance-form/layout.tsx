'use client';

import Html from '@/components/Html.tsx';
import { useTranslation } from '@/hooks/use-translation.ts';
import { defaultLocale } from '@/config/i18n.ts';
import { redirect } from 'next/navigation';

export default function RootLayout() {
  const { i18n } = useTranslation({ lng: defaultLocale });

  redirect(
    'https://docs.google.com/forms/d/e/1FAIpQLScXsf3q7sqpU0TpIgkAtoTlUHDy50IuU5tb6dSLUUcXsmUGBQ/viewform?usp=sf_link'
  );

  return (
    <Html i18n={i18n}>
      <body></body>
    </Html>
  );
}
