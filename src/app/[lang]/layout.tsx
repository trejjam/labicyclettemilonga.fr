import '../globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { defaultLocale, locales } from '@/config/i18n.ts';
import Html from '@/components/Html.tsx';
import { useTranslation } from '@/hooks/use-translation.ts';
import { use } from 'react';
import Footer from '@/components/Footer.tsx';
import { favicon } from '@/components/Favicon.tsx';
import { Params } from '@/types/props.ts';
import TopNavbar from '@/components/TopNavbar.tsx';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'La Bicycletta Milonga',
  description: 'La milonga de Toulouse',
  icons: favicon,
};

export function generateStaticParams() {
  return locales.filter((x) => x !== defaultLocale).map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const lang = use(params).lang ?? defaultLocale;
  const { i18n } = useTranslation({ lng: lang });

  return (
    <Html i18n={i18n}>
      <body className="antialiased">
      <TopNavbar lang={lang} />
      {children}
      <Footer />
      </body>
    </Html>
  );
}
