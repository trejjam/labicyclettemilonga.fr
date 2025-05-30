'use client';

import { use, useMemo } from 'react';
import { defaultLocale } from '@/config/i18n.ts';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Params } from '@/types/props.ts';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useHeaderHeight } from '@/hooks/use-header-height.ts';
import { unComputedHeaderHeight } from '@/common/constants.ts';

export default function GenericMarathonPage({ params }: { params: Params }) {
  const DynamicVenueMap = useMemo(
    () =>
      dynamic(() => import('@/components/VenueMap.tsx'), {
        ssr: false,
      }),
    []
  );

  const lang = use(params).lang ?? defaultLocale;
  const headHeight = useHeaderHeight(unComputedHeaderHeight);

  const { t } = useTranslation({ lng: lang });

  const timetables = t('marathon.timetables', {
    returnObjects: true,
  }) as Array<{
    title: string;
    inner: Array<{
      time: string;
      description: string;
    }>;
  }>;

  const registrationDate = new Date(2025, 0, 12, 12, 0, 0);

  const marathonDjsDesktop = '/img/marathon/2025/djs-all-desktop.jpg';
  const marathonDjsMobile = '/img/marathon/2025/djs-all-mobile.jpg';

  return (
    <>
      <section
        id='introduction'
        style={{ scrollMarginTop: headHeight }}
        className='relative flex min-h-full items-center justify-center overflow-hidden bg-[url(/img/toulouse-map.jpg)] bg-cover bg-fixed bg-center bg-no-repeat'
      >
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
              <h1 className='my-8 text-4xl font-extrabold text-white lg:text-5xl'>
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
              {/* <div className='flex justify-center'>
                <div className='relative mt-14'>
                  <div>
                    {new Date() > registrationDate && (
                      <div>
                        <a
                          className='inline-flex items-center justify-center rounded-md border border-transparent bg-[#5ECEF9] p-4 hover:bg-[#5ECEF9]/80'
                          type='button'
                          href='/marathon/signup'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {t('marathon.signup')}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section
        id='cover'
        style={{ scrollMarginTop: headHeight }}
        className='px-12 py-12'
      >
        <picture className='flex h-full w-full'>
          <source
            media='(min-width: 1024px)'
            srcSet={marathonDjsDesktop + ' 1198w'}
          />
          <source srcSet={marathonDjsMobile + ' 836w'} />
          <img
            alt={t('marathon.djs')}
            src={marathonDjsMobile}
            className='min-h[668px] object-fit m-auto inline w-full max-w-[836px] lg:max-w-[1198px]'
          />
        </picture>
      </section>
      <section
        id='timetable'
        style={{ scrollMarginTop: headHeight }}
        className='bg-slate-900'
      >
        <div className='m-auto flex max-w-5xl flex-wrap justify-center px-12 py-12'>
          <h1 className='my-8 text-center text-4xl font-extrabold text-gray-300 lg:text-6xl'>
            {t('marathon.timetable')}
          </h1>
          <p className='w-full text-center text-xl text-gray-300'>
            {t('marathon.timetable-description')}
          </p>
          <div className='mt-4 w-full text-gray-300'>
            {timetables.map((timeGroup, i) => {
              return (
                <div
                  key={i}
                  className='mt-8'
                >
                  <h2 className='text-3xl font-bold capitalize'>
                    {timeGroup.title}
                  </h2>
                  <div className='pl-6'>
                    {timeGroup.inner.map((row, j) => {
                      return (
                        <div
                          key={j}
                          className='flex flex-wrap gap-4 py-2'
                        >
                          <p className='w-2/12 text-right'>{row.time}</p>
                          <p className='w-8/12'>{row.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id='djs'
        style={{ scrollMarginTop: headHeight }}
        className='m-auto max-w-5xl px-12 py-12'
      >
        <h1 className='my-8 text-center text-4xl font-extrabold lg:text-6xl'>
          {t('marathon.djs')}
        </h1>
        <div className='flex w-full flex-wrap items-start justify-center'>
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
            className='max-w-96 object-scale-down pr-2 pb-2 md:w-6/12 lg:w-5/12'
          />
          <p className='mt-4 text-center md:mt-0 md:ml-12 md:w-5/12 md:text-left lg:ml-12'>
            {t('marathon.dj.palmer')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
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
            className='max-w-96 object-scale-down pr-2 pb-2 md:order-2 md:w-6/12 lg:w-5/12'
          />
          <p className='mt-4 text-center md:order-1 md:mt-0 md:mr-12 md:w-5/12 md:text-left lg:mr-12'>
            {t('marathon.dj.rosita')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
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
            className='max-w-96 object-scale-down pr-2 pb-2 md:w-6/12 lg:w-5/12'
          />
          <p className='mt-4 text-center md:mt-0 md:ml-12 md:w-5/12 md:text-left lg:ml-12'>
            {t('marathon.dj.nocitango')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
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
            className='max-w-96 object-scale-down pr-2 pb-2 md:order-2 md:w-6/12 lg:w-5/12'
          />
          <p className='mt-4 text-center md:order-1 md:mt-0 md:mr-12 md:w-5/12 md:text-left lg:mr-12'>
            {t('marathon.dj.arribat')}
          </p>
          <div className='clear-both'></div>
        </div>
        <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
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
            className='max-w-96 object-scale-down pr-2 pb-2 md:w-6/12 lg:w-5/12'
          />
          <p className='mt-4 text-center md:mt-0 md:ml-12 md:w-5/12 md:text-left lg:ml-12'>
            {t('marathon.dj.carmen')}
          </p>
          <div className='clear-both'></div>
        </div>
      </section>
      <section
        id='place'
        style={{ scrollMarginTop: headHeight }}
        className='bg-slate-900'
      >
        <div className='m-auto flex max-w-5xl flex-wrap justify-center px-12 py-12'>
          <h1 className='my-8 text-center text-4xl font-extrabold text-gray-300 lg:text-6xl'>
            {t('place.title')}
          </h1>
          <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
            <div className='w-0 basis-full'></div>
            <Image
              src='/img/marathon/2025/salle.jpg'
              width={836}
              height={836}
              alt='salle'
              className='max-w-96 object-scale-down pr-2 pb-2 md:w-6/12 lg:w-5/12'
            />
            <p className='mt-4 text-center text-gray-300 md:mt-0 md:ml-12 md:w-5/12 md:text-left lg:ml-12'>
              {t('place.salle')}
            </p>
            <div className='clear-both'></div>
          </div>
          <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
            <div className='w-0 basis-full'></div>
            <Image
              src='/img/marathon/2025/jardin.jpg'
              width={836}
              height={836}
              alt='jardin'
              className='max-w-96 object-scale-down pr-2 pb-2 md:order-2 md:w-6/12 lg:w-5/12'
            />
            <p className='mt-4 text-center text-gray-300 md:order-1 md:mt-0 md:mr-12 md:w-5/12 md:text-left lg:mr-12'>
              {t('place.jardin')}
            </p>
            <div className='clear-both'></div>
          </div>
          <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
            <div className='w-0 basis-full'></div>
            <Image
              src='/img/marathon/2025/Garonne.jpg'
              width={836}
              height={836}
              alt='Garonne'
              className='max-w-96 object-scale-down pr-2 pb-2 md:w-6/12 lg:w-5/12'
            />
            <p className='mt-4 text-center text-gray-300 md:mt-0 md:ml-12 md:w-5/12 md:text-left lg:ml-12'>
              {t('place.garonne')}
            </p>
            <div className='clear-both'></div>
          </div>
          <div className='mt-8 flex w-full flex-wrap items-start justify-center'>
            <div className='w-0 basis-full'></div>
            <Image
              src='/img/marathon/2025/food.jpg'
              width={836}
              height={836}
              alt='food'
              className='max-w-96 object-scale-down pr-2 pb-2 md:order-2 md:w-6/12 lg:w-5/12'
            />
            <p className='mt-4 text-center text-gray-300 md:order-1 md:mt-0 md:mr-12 md:w-5/12 md:text-left lg:mr-12'>
              {t('place.food')}
            </p>
            <div className='clear-both'></div>
          </div>
        </div>
      </section>
      <section
        id='links'
        style={{ scrollMarginTop: headHeight }}
        className='m-auto max-w-5xl px-12 py-12'
      >
        <h1 className='my-8 text-center text-4xl font-extrabold lg:text-6xl'>
          {t('marathon.links.title')}
        </h1>
        <ul className='max-w- list-disc'>
          <li className='my-2 text-xl hover:underline'>
            <a
              href=''
              onClick={(e) => {
                e.preventDefault();
                alert('Not available yet');
              }}
              rel='nofollow'
            >
              {t('marathon.links.guide')}
            </a>
          </li>
          <li className='my-2 text-xl hover:underline'>
            <a
              href='https://docs.google.com/spreadsheets/d/1HNlVGnwYeBYBU3JEkGdKqX8Zi6-f1fCIZpXCZ_4H_3g/edit'
              rel='nofollow'
            >
              {t('marathon.links.shared-accommodation')}
            </a>
          </li>
          <li className='my-2 text-xl hover:underline'>
            <a
              href='https://docs.google.com/spreadsheets/d/1Rx0CZKr_oLxVAGmE8ngM_481udMNBciUsM4ia7Ec2cs/edit'
              target='_blank'
              rel='nofollow'
            >
              {t('marathon.links.car-sharing')}
            </a>
          </li>
          <li className='my-2 text-xl hover:underline'>
            <a
              href='https://sites.google.com/site/rameratoulouseautuc/contact-plan-dacces'
              target='_blank'
              rel='nofollow'
            >
              {t('marathon.links.rowing')}
            </a>
          </li>
        </ul>
      </section>
      <div
        id='location'
        style={{ scrollMarginTop: headHeight }}
        suppressHydrationWarning={true}
      >
        <DynamicVenueMap lang={lang} />
      </div>
      <section
        id='newsletter'
        style={{ scrollMarginTop: headHeight }}
        className='flex items-center justify-center'
      >
        <div className='flex w-full flex-wrap items-center justify-center px-12 py-12 text-center lg:mt-12'>
          <div className='w-full rounded-t-md bg-gray-800/20 px-4 py-[5px] font-medium'>
            {t('marathon.newsletter')}
          </div>

          <iframe
            suppressHydrationWarning={true}
            data-w-type='embedded'
            src='https://sugu5.mjt.lu/wgt/sugu5/x690/form?c=5ea5ef34'
            className='min-h-[650px] w-full'
          ></iframe>

          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            type='text/javascript'
            src='https://app.mailjet.com/pas-nc-embedded-v1.js'
            async
            defer
          ></script>
        </div>
      </section>
    </>
  );
}
