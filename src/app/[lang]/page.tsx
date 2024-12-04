'use client';

import { defaultLocale } from '@/config/i18n.ts';
import { use } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo.tsx';
import TimeDuration from '@/components/TimeDuration.tsx';
import IconifyIcon from '@/components/wrappers/IconifyIcon.tsx';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Params } from '@/types/props.ts';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TopNavbar from '@/components/TopNavbar.tsx';

export default function GenericHomePage({ params }: { params: Params }) {
  const lang = use(params).lang ?? defaultLocale;

  const { t } = useTranslation({ lng: lang });

  return (
    <>
      {/*
      <TopNavbar navLinks={navLinks} />
      */}

      <section
        id='home'
        className='relative flex h-full items-center justify-center overflow-hidden bg-[url(/img/toulouse-map.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:h-screen'
      >
        <div className='absolute inset-0 bg-black/80' />
        <div className='container'>
          <div className='relative flex h-full w-full items-center justify-center px-12 py-12 text-center'>
            <div>
              <Link href='/' className='mb-10 flex items-center justify-center'>
                <Logo className='fill-bicyclette' />
              </Link>
              <span className='rounded-md bg-white/20 px-4 py-[5px] font-medium capitalize text-white'>
                Our Website Is
              </span>
              <h1 className='my-8 text-4xl font-extrabold capitalize text-white lg:text-6xl'>
                coming soon
              </h1>
              <div className='flex justify-center'>
                <div className='max-w-xl text-center'>
                  {/*
              <p className="font-semibold text-white">
                Itaque earum rerum tenetur a sapiente delectus reiciendis voluptatibus maiores alias perferendis
                doloribus asperiores.
              </p>
              */}
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='relative mt-14'>
                  <div>
                    <TimeDuration
                      lang={lang}
                      deadline={new Date(2024, 11, 5, 0, 0, 0, 0)}
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='relative mt-10'>
                  <h6 className='mb-4 text-center text-lg text-white'>
                    {t('follow-us')}:
                  </h6>
                  <ul className='font-maven flex flex-wrap items-center gap-6'>
                    <li>
                      <Link
                        href='https://www.facebook.com/groups/labicyclettemilonga/'
                        className='group inline-flex items-center justify-center text-base font-medium text-white transition-all duration-500 hover:text-blue-500'
                      >
                        <IconifyIcon
                          icon='uil:facebook-f'
                          className='me-2 text-xl'
                        />{' '}
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='https://www.instagram.com/labicyclettemilonga/'
                        className='group inline-flex items-center justify-center text-base font-medium text-white transition-all duration-500 hover:text-pink-500'
                      >
                        <IconifyIcon
                          icon='uil:instagram'
                          className='me-2 text-xl'
                        />{' '}
                        Instagram
                      </Link>
                    </li>
                  </ul>
                  <button
                    type='button'
                    className='group mt-5 inline-flex items-center justify-center rounded-lg bg-gray-400/60 px-6 py-2 text-white transition-all duration-500 hover:bg-gray-400/80'
                    data-hs-overlay='#hs-vertically-centered-modal'
                    onClick={() =>
                      window.open('mailto:danse@labicyclettemilonga.fr')
                    }
                  >
                    <IconifyIcon icon='ix:e-mail' className='me-2 text-xl' />{' '}
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
