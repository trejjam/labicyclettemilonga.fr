'use client';

import { use } from 'react';
import { defaultLocale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Params } from '@/types/props.ts';
import dynamic from 'next/dynamic';
import TimeDuration from '@/components/TimeDuration.tsx';
import Image from 'next/image';

const DynamicVenueMap = dynamic(() => import('@/components/VenueMap.tsx'), {
  ssr: false,
});

export default function GenericMarathonPage({ params }: { params: Params }) {
  const lang = use(params).lang ?? defaultLocale;

  const { t } = useTranslation({ lng: lang });

  return (
    <>
      <section
        className='relative flex h-full items-center justify-center overflow-hidden bg-[url(/img/toulouse-map.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:h-screen'>
        <div className='absolute inset-0 bg-black/80' />
        <div className='container'>
          <div className='relative flex h-full w-full items-center justify-center px-12 py-12 text-center'>
            <div>
              <h1 className='my-8 text-4xl font-extrabold capitalize text-white lg:text-6xl'>
                {t('marathon.title')}
              </h1>
              <div className='flex justify-center'>
                <div className='max-w-xl text-center'>
                  <p
                    className='font-semibold text-white'
                    dangerouslySetInnerHTML={{
                      __html: t('marathon.description', {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  ></p>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='relative mt-14'>
                  <div>
                    <TimeDuration
                      lang={lang}
                      deadline={new Date(2025, 0, 12, 12, 0, 0, 0)}
                    />
                  </div>
                </div>
              </div>
              <div className='flex mt-12 gap-6 items-start justify-center'>
                <div className='max-w-96'>
                  <Image
                    src='/img/marathon/2025/toulouse-city-center.png'
                    width={304}
                    height={148}
                    alt='Toulouse city center'
                  />
                </div>
                <div className='max-w-96'>
                  <Image
                    src='/img/marathon/2025/may-2025.png'
                    width={311}
                    height={173}
                    alt='May 9-10-11, 2025'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-wrap items-center justify-center overflow-hidden px-12 py-12'>
        <h1 className='my-8 text-4xl font-extrabold capitalize black lg:text-6xl'>
          {t('marathon.djs')}
        </h1>
        <div className='basis-full w-0 mt-12'></div>
        <div className='max-w-96 mr-96'>
          <Image
            src='/img/marathon/2025/dj-nocitango.jpg'
            width={836}
            height={836}
            alt='TDJ Paola Nocitango'
          />
        </div>
        <div className='basis-full w-0 mt-12'></div>
        <div className='max-w-96 ml-96'>
          <Image
            src='/img/marathon/2025/dj-palmer.jpg'
            width={836}
            height={836}
            alt='TDJ Barbara Palmer'
          />
        </div>
        <div className='basis-full w-0 mt-12'></div>
        <div className='max-w-96 mr-96'>
          <Image
            src='/img/marathon/2025/dj-arribat.jpg'
            width={836}
            height={836}
            alt='TDJ Nicolas Arribat'
          />
        </div>
        <div className='basis-full w-0 mt-12'></div>
        <div className='max-w-96 ml-96'>
          <Image
            src='/img/marathon/2025/dj-carmen.jpg'
            width={836}
            height={836}
            alt='TDJ Carmen Maria Hergos'
          />
        </div>
        <div className='basis-full w-0 mt-12'></div>
        <div className='max-w-96 mr-96'>
          <Image
            src='/img/marathon/2025/dj-rosita.jpg'
            width={836}
            height={836}
            alt='TDJ Rosita Lagos-Diaz'
          />
        </div>
      </section>
      <div suppressHydrationWarning={true}>
        <DynamicVenueMap lang={lang} />
      </div>
    </>
  );
}
