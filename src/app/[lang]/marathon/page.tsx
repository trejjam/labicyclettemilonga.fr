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

  const registrationDate = new Date(2025, 0, 12, 12, 0, 0);

  const marathonDjsDesktop = '/img/marathon/2025/djs-all-desktop.jpg';
  const marathonDjsMobile = '/img/marathon/2025/djs-all-mobile.jpg';

  return (
    <>
      <section className='relative flex min-h-full items-center justify-center overflow-hidden bg-[url(/img/toulouse-map.jpg)] bg-cover bg-fixed bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-black/80' />
        <div className='container'>
          <div className='relative mt-20 flex w-full items-center justify-center px-12 py-12 text-center lg:mt-12'>
            <div>
              <div className='mt-12 flex items-start justify-center gap-6'>
                <div className='max-w-96'>
                  <Image
                    src='/img/marathon/2025/bandeau-marathon-site.png'
                    width={701}
                    height={394}
                    alt='Bicyclette Tango Marathon Toulouse city center'
                  />
                </div>
              </div>
              <h1 className='my-8 text-4xl font-extrabold capitalize text-white lg:text-5xl'>
                {t('marathon.title')}
              </h1>
              <div className='flex justify-center'>
                <div className='max-w-xl text-center'>
                  <p className='text-2xl font-semibold text-white lg:text-3xl'>
                    {t('marathon.description', {
                      date: registrationDate,
                      formatParams: {
                        date: {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                        },
                      },
                    })}
                  </p>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='relative mt-14'>
                  <div>
                    <TimeDuration lang={lang} deadline={registrationDate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-12 pt-12'>
        <picture className="flex w-full h-full">
          <source media='(min-width: 1024px)' srcSet={marathonDjsDesktop + ' 1198w'} />
          <source srcSet={marathonDjsMobile + ' 836w'} />
          <img alt={t('marathon.djs')} src={marathonDjsMobile} className='m-auto inline w-full max-w-[836px] lg:max-w-[1198px] object-fit' />
        </picture>
      </section>
      <section className='m-auto max-w-5xl px-12 py-12'>
        <h1 className='black my-8 text-center text-4xl font-extrabold capitalize lg:text-6xl'>
          {t('marathon.djs')}
        </h1>
        <div className='w-full md:flex md:flex-wrap'>
          <h2 className='mb-2 w-full text-center text-2xl font-medium'>
            {t('marathon.dj.palmer-title')}
          </h2>
          <div className='w-0 basis-full'></div>
          <p className='mb-2 w-full text-center text-lg font-medium italic'>
            {t('marathon.dj.palmer-time')}
          </p>
          <div className='w-0 basis-full'></div>
          <Image
            src='/img/marathon/2025/dj-palmer.jpg'
            width={836}
            height={836}
            alt='TDJ Barbara Palmer'
            className='float-left inline w-7/12 max-w-96 pb-2 pr-2 md:w-6/12 lg:float-none lg:w-5/12'
          />
          <p className='md:ml-12 md:w-5/12 lg:ml-12'>
            {t('marathon.dj.palmer')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 w-full md:flex md:flex-wrap'>
          <h2 className='mb-2 w-full text-center text-2xl font-medium'>
            {t('marathon.dj.rosita-title')}
          </h2>
          <div className='w-0 basis-full'></div>
          <p className='mb-2 w-full text-center text-lg font-medium italic'>
            {t('marathon.dj.rosita-time')}
          </p>
          <div className='w-0 basis-full'></div>
          <Image
            src='/img/marathon/2025/dj-rosita.jpg'
            width={836}
            height={836}
            alt='TDJ Rosita Lagos-Diaz'
            className='float-right inline w-7/12 max-w-96 pb-2 pr-2 md:order-2 md:w-6/12 lg:float-none lg:w-5/12'
          />
          <p className='md:order-1 md:mr-12 md:w-5/12 lg:mr-12'>
            {t('marathon.dj.rosita')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 w-full md:flex md:flex-wrap'>
          <h2 className='mb-2 w-full text-center text-2xl font-medium'>
            {t('marathon.dj.nocitango-title')}
          </h2>
          <div className='w-0 basis-full'></div>
          <p className='mb-2 w-full text-center text-lg font-medium italic'>
            {t('marathon.dj.nocitango-time')}
          </p>
          <div className='w-0 basis-full'></div>
          <Image
            src='/img/marathon/2025/dj-nocitango.jpg'
            width={836}
            height={836}
            alt='TDJ Paola Nocitango'
            className='float-left inline w-7/12 max-w-96 pb-2 pr-2 md:w-6/12 lg:float-none lg:w-5/12'
          />
          <p className='md:ml-12 md:w-5/12 lg:ml-12'>
            {t('marathon.dj.nocitango')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 w-full md:flex md:flex-wrap'>
          <h2 className='mb-2 w-full text-center text-2xl font-medium'>
            {t('marathon.dj.arribat-title')}
          </h2>
          <div className='w-0 basis-full'></div>
          <p className='mb-2 w-full text-center text-lg font-medium italic'>
            {t('marathon.dj.arribat-time')}
          </p>
          <div className='w-0 basis-full'></div>
          <Image
            src='/img/marathon/2025/dj-arribat.jpg'
            width={836}
            height={836}
            alt='TDJ Nicolas Arribat'
            className='float-right inline w-7/12 max-w-96 pb-2 pr-2 md:order-2 md:w-6/12 lg:float-none lg:w-5/12'
          />
          <p className='md:order-1 md:mr-12 md:w-5/12 lg:mr-12'>
            {t('marathon.dj.arribat')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 w-full md:flex md:flex-wrap'>
          <h2 className='mb-2 w-full text-center text-2xl font-medium'>
            {t('marathon.dj.carmen-title')}
          </h2>
          <div className='w-0 basis-full'></div>
          <p className='mb-2 w-full text-center text-lg font-medium italic'>
            {t('marathon.dj.carmen-time')}
          </p>
          <div className='w-0 basis-full'></div>
          <Image
            src='/img/marathon/2025/dj-carmen.jpg'
            width={836}
            height={836}
            alt='TDJ Carmen Maria Hergos'
            className='float-left inline w-7/12 max-w-96 pb-2 pr-2 md:w-6/12 lg:float-none lg:w-5/12'
          />
          <p className='md:ml-12 md:w-5/12 lg:ml-12'>
            {t('marathon.dj.carmen')}
          </p>
          <div className='clear-both'></div>
        </div>
      </section>
      <div suppressHydrationWarning={true}>
        <DynamicVenueMap lang={lang} />
      </div>
      <section className='flex items-center justify-center'>
        <div className='flex w-full flex-wrap items-center justify-center px-12 py-12 text-center lg:mt-12'>
          <div className='w-full rounded-t-md bg-gray-800/20 px-4 py-[5px] font-medium'>
            {t('marathon.newsletter')}
          </div>

          <iframe
            data-w-type='embedded'
            src='https://sugu5.mjt.lu/wgt/sugu5/x690/form?c=5ea5ef34'
            className='min-h-[650px] w-full'
          ></iframe>

          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            type='text/javascript'
            src='https://app.mailjet.com/pas-nc-embedded-v1.js'
          ></script>
        </div>
      </section>
    </>
  );
}
