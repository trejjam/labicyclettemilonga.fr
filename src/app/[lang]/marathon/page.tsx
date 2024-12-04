'use client';

import { use } from 'react';
import { defaultLocale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Params } from '@/types/props.ts';
import dynamic from 'next/dynamic';
import TimeDuration from '@/components/TimeDuration.tsx';

const DynamicVenueMap = dynamic(() => import('@/components/VenueMap.tsx'), {
  ssr: false,
});

export default function GenericMarathonPage({ params }: { params: Params }) {
  const lang = use(params).lang ?? defaultLocale;

  const { t } = useTranslation({ lng: lang });

  return (
    <>
      <section
        className="relative flex h-full items-center justify-center overflow-hidden bg-[url(/img/toulouse-map.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:h-screen">
        <div className="absolute inset-0 bg-black/80" />
        <div className="container">
          <div className="relative flex h-full w-full items-center justify-center px-12 py-12 text-center">
            <div>
              <h1 className="my-8 text-4xl font-extrabold capitalize text-white lg:text-6xl">
                {t('marathon.title')}
              </h1>
              <div className="flex justify-center">
                <div className="max-w-xl text-center">
                  <p className="font-semibold text-white" dangerouslySetInnerHTML={{
                    __html: t('marathon.description', { interpolation: { escapeValue: false } }),
                  }}>
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative mt-14">
                  <div>
                    <TimeDuration
                      lang={lang}
                      deadline={new Date(2025, 0, 12, 12, 0, 0, 0)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div suppressHydrationWarning={true}>
        <DynamicVenueMap lang={lang} />
      </div>
    </>
  );
}
