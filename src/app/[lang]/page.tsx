'use client';

import { defaultLocale } from '@/config/i18n.ts';
import { use } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Params } from '@/types/props.ts';
import dynamic from 'next/dynamic';
import TimeDuration from '@/components/TimeDuration.tsx';
import { milongaDates } from '@/app/[lang]/data.ts';

const DynamicVenueMap = dynamic(() => import('@/components/VenueMap.tsx'), {
  ssr: false,
});

export default function GenericHomePage({ params }: { params: Params }) {
  const lang = use(params).lang ?? defaultLocale;

  const { t } = useTranslation({ lng: lang });

  const today = new Date();

  const nextMilonga = milongaDates.find((x) => x.ends > today);

  return (
    <>
      <section className='relative flex h-full items-center justify-center overflow-hidden bg-[url(/img/toulouse-map.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:h-screen'>
        <div className='absolute inset-0 bg-black/80' />
        <div className='container'>
          <div className='relative flex h-full w-full items-center justify-center px-12 py-12 text-center'>
            <div>
              <h1 className='my-8 text-4xl font-extrabold capitalize text-white lg:text-6xl'>
                {t('milonga.title')}
              </h1>
              {nextMilonga !== undefined && (
                <>
                  <div className='flex justify-center'>
                    <div className='max-w-xl text-center'>
                      <p className='font-semibold text-white'>
                        {t('milonga.dateTime', {
                          starts: nextMilonga.starts,
                          ends: nextMilonga.ends,
                          formatParams: {
                            starts: {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: 'numeric',
                            },
                            ends: { hour: 'numeric', minute: 'numeric' },
                          },
                        })}
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <div className='relative mt-14'>
                      <div>
                        <TimeDuration
                          lang={lang}
                          deadline={nextMilonga.starts}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center overflow-hidden px-12'>
        <div className='flex items-center justify-center px-12 py-12 text-center'>
          <div className='my-14 justify-center'>
            <Image
              src='/img/milongas/2024-12-07_milonga.jpg'
              width={1080}
              height={1080}
              alt='Milonga 7. 12. 2024'
            />
          </div>
        </div>
      </section>
      <div suppressHydrationWarning={true}>
        <DynamicVenueMap lang={lang} />
      </div>
    </>
  );
}
