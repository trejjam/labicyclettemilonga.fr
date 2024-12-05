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
import useOutside from '@/hooks/use-outside.ts';

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

  const wrapperRef = useOutside(() => setNav(false));

  return (
    <header
      ref={wrapperRef}
      className={cn(
        'font-nunito fixed inset-x-0 top-0 z-40 block w-full bg-gray-800 shadow-xl transition-all duration-500 lg:bg-transparent lg:shadow-none',
        isDark ? '' : '',
        isSticky ? 'lg:bg-gray-800/80' : ''
      )}
    >
      <div className='container ml-auto mr-auto'>
        <nav className='flex flex-wrap items-center justify-between py-4 lg:flex-nowrap'>
          <Link
            href={{ pathname: langPrefix }}
            className='inline-block whitespace-nowrap'
          >
            <Logo className='w-28 fill-bicyclette' />
          </Link>
          <div className='ms-auto flex items-center px-2.5 lg:hidden'>
            <LangSelector lang={lang} isDark={isDark} buttonLabel={lang} />
            <button
              className='hs-collapse-toggle ml-8 inline-flex h-10 w-12 items-center justify-center rounded-md border bg-gray-300'
              type='button'
              onClick={() => setNav(!nav)}
            >
              <IconifyIcon icon='uil:bars' className='text-2xl' />
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
                setNav={setNav}
                className={cn(
                  'relative inline-block cursor-pointer rounded-md bg-transparent px-3.5 py-1 text-base font-semibold capitalize tracking-wide transition-all duration-300',
                  'text-white',
                  'active:bg-white/20 active:text-bicyclette lg:active:bg-black/40',
                  'focus:bg-white/20 focus:text-bicyclette lg:focus:bg-black/40',
                  'hover:bg-white/20 hover:text-bicyclette lg:hover:bg-black/40',
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
