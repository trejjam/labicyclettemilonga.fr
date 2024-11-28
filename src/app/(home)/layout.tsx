import '../globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { defaultLocale } from '@/config/i18n.ts';
import Html from '@/components/Html.tsx';
import { useTranslation } from '@/hooks/use-translation.ts';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'La Bicycletta Milonga',
  description: 'La milonga de Toulouse',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { i18n } = useTranslation({ lng: defaultLocale });

  return (
    <Html i18n={i18n}>
      <body>{children}</body>
    </Html>
  );
}
