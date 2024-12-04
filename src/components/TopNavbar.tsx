'use client';

import Link from 'next/link';
import IconifyIcon from './wrappers/IconifyIcon.tsx';
import { cn } from '@/helpers/cn.ts';
import useScrollEvent from '@/hooks/use-scroll-event.ts';
import Logo from '@/components/Logo.tsx';
import { useState } from 'react';
import { Locale } from '@/config/i18n.ts';
import Links from '@/components/Links.tsx';
import LangSelector from '@/components/LangSelector.tsx';
import getLangPrefix from '@/helpers/lang-prefix.ts';

export default function TopNavbar({
  isDark,
  lang,
}: {
  isDark?: boolean;
  lang: Locale;
}) {
  const [nav, setNav] = useState(false);
  const { scrollY } = useScrollEvent();
  const langPrefix = getLangPrefix(lang);

  const isSticky = scrollY >= 50;

  return (
    <header
      className={cn(
        'font-nunito fixed inset-x-0 top-0 z-40 block w-full border-b border-gray-200 bg-white shadow-xl transition-all duration-500 lg:border-none lg:bg-transparent lg:shadow-none',
        isDark ? 'nav-dark' : 'nav-light',
        isSticky
          ? 'sticky border-b border-gray-200 bg-white shadow-xl transition-all duration-500'
          : ''
      )}
    >
      <div className='container ml-auto mr-auto'>
        <nav className='flex flex-wrap items-center justify-between py-4 transition-all duration-500 lg:flex-nowrap'>
          <Link
            href={{ pathname: langPrefix }}
            className='inline-block whitespace-nowrap'
          >
            <Logo className='w-28 fill-bicyclette' />
          </Link>
          <div className='ms-auto flex items-center px-2.5 lg:hidden'>
            <LangSelector lang={lang} isDark={isDark} buttonLabel={lang} />
            <button
              className='hs-collapse-toggle ml-8 inline-flex h-9 w-12 items-center justify-center rounded-md border border-gray-300 bg-slate-300/30'
              type='button'
            >
              <IconifyIcon
                icon='uil:bars'
                className='text-2xl'
                onClick={() => setNav(!nav)}
              />
            </button>
          </div>
          <div
            className={cn(
              nav ? '' : 'hidden',
              'hs-collapse mx-auto mt-2 grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto'
            )}
          >
            <ul className='mt-4 inline-flex w-full flex-col justify-center gap-x-4 lg:mt-0 lg:flex-row lg:items-center'>
              <Links
                lang={lang}
                className={cn(
                  'relative inline-block cursor-pointer rounded-md bg-transparent px-3.5 py-1 text-base font-semibold capitalize tracking-wide transition-all duration-300',
                  'text-black',
                  'lg:text-white',
                  'active:bg-black/40 active:text-bicyclette',
                  'focus:bg-black/40 focus:text-bicyclette',
                  'hover:bg-black/40 hover:text-bicyclette',
                  isDark ? '' : '',
                  isSticky ? '' : ''
                )}
              />
            </ul>
          </div>
          <div className='hidden lg:block'>
            <LangSelector lang={lang} isDark={isDark} buttonLabel={lang} />
          </div>
        </nav>
      </div>
    </header>
  );
}
