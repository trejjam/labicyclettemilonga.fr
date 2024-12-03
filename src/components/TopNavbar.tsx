'use client';

import Link from 'next/link';
import IconifyIcon from './wrappers/IconifyIcon.tsx';
import type { NavbarLinkProps } from '@/types/props.ts';
import { cn } from '@/helpers/cn.ts';
import useScrollEvent from '@/hooks/use-scroll-event.ts';
import Logo from '@/components/Logo.tsx';

export default function TopNavbar({
  navLinks,
  isDark,
}: {
  navLinks: NavbarLinkProps[];
  isDark?: boolean;
}) {
  const { scrollY } = useScrollEvent();

  return (
    <header
      id='navbar-sticky'
      className={cn(
        'navbar',
        'font-nunito fixed inset-x-0 top-0 z-40 block w-full border-b border-gray-200 bg-white shadow-xl transition-all duration-500 lg:border-none lg:bg-transparent lg:shadow-none',
        isDark ? 'nav-dark' : 'nav-light',
        {
          'nav-sticky': scrollY >= 50,
        }
      )}
    >
      <div className='container'>
        <nav className='flex flex-wrap items-center justify-between py-4 transition-all duration-500 lg:flex-nowrap'>
          <Link href='/' className='inline-block whitespace-nowrap'>
            <Logo className='w-28 fill-[#ff5757]' />
          </Link>
          <div className='ms-auto flex items-center px-2.5 lg:hidden'>
            <button
              className='hs-collapse-toggle inline-flex h-9 w-12 items-center justify-center rounded-md border border-gray-300 bg-slate-300/30'
              type='button'
              id='hs-unstyled-collapse'
              data-hs-collapse='#mobileMenu'
              data-hs-type='collapse'
            >
              <IconifyIcon icon='uil:bars' className='text-2xl' />
            </button>
          </div>
          <div className='hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto'>
            <ul className='mt-4 inline-flex flex-col justify-center gap-x-4 lg:mt-0 lg:flex-row lg:items-center'>
              {navLinks.map((item, idx) => (
                <li key={item.link + idx} className='nav-item'>
                  <a
                    href={item.link}
                    className={cn(
                      'relative inline-block cursor-pointer rounded-md bg-transparent px-3.5 py-1 text-base font-semibold capitalize tracking-wide transition-all duration-300',
                      'active:bg-gray-400/10 active:text-primary',
                      'focus:bg-gray-400/10 focus:text-primary',
                      'hover:bg-gray-400/10 hover:text-primary',
                      isDark ? 'text-gray-800' : 'text-gray-600 lg:text-white'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='mt-4 flex items-center border-t border-gray-200 pt-4 lg:mt-0 lg:hidden lg:border-none lg:pt-0'>
              <button
                className={cn(
                  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-base font-medium transition-all',
                  isDark
                    ? 'bg-primary text-white'
                    : 'bg-primary text-white lg:bg-white lg:text-primary'
                )}
              >
                <IconifyIcon
                  icon='lucide:arrow-big-down-dash'
                  className='me-2 h-5 w-5'
                />
                Download
              </button>
            </div>
          </div>
          <div className='hidden items-center lg:flex'>
            <button
              className={cn(
                'inline-flex items-center justify-center rounded-lg px-4 py-2 text-base font-medium transition-all',
                isDark
                  ? 'bg-primary text-white'
                  : 'bg-primary text-white lg:bg-white lg:text-primary'
              )}
            >
              <IconifyIcon
                icon='lucide:arrow-big-down-dash'
                className='me-2 h-5 w-5'
              />
              Download
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
