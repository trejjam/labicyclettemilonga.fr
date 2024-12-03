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
      id="navbar-sticky"
      className={cn(
        'navbar',
        'font-nunito block fixed top-0 inset-x-0 z-40 w-full lg:bg-transparent bg-white border-b lg:border-none border-gray-200 transition-all duration-500 shadow-xl lg:shadow-none',
        isDark
          ? 'nav-dark'
          : 'nav-light',
        {
          'nav-sticky': scrollY >= 50,
        },
      )}
    >
      <div className="container">
        <nav className="flex flex-wrap lg:flex-nowrap items-center justify-between py-4 transition-all duration-500">
          <Link href="/" className="inline-block whitespace-nowrap">
            <Logo className="fill-[#ff5757] w-28" />
          </Link>
          <div className="ms-auto flex items-center px-2.5 lg:hidden">
            <button
              className="hs-collapse-toggle inline-flex h-9 w-12 items-center justify-center rounded-md border border-gray-300 bg-slate-300/30"
              type="button"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <IconifyIcon icon="uil:bars" className="text-2xl" />
            </button>
          </div>
          <div
            className="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto"
          >
            <ul className="inline-flex flex-col lg:flex-row gap-x-4 lg:items-center justify-center mt-4 lg:mt-0">
              {navLinks.map((item, idx) => (
                <li key={item.link + idx} className="nav-item">
                  <a href={item.link} className={cn(
                    'inline-block relative tracking-wide py-1 px-3.5 rounded-md text-base capitalize font-semibold cursor-pointer transition-all duration-300 bg-transparent',
                    'active:text-primary active:bg-gray-400/10',
                    'focus:text-primary focus:bg-gray-400/10',
                    'hover:text-primary hover:bg-gray-400/10',
                    isDark
                      ? 'text-gray-800'
                      : 'lg:text-white text-gray-600',
                  )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="mt-4 flex items-center border-t border-gray-200 pt-4 lg:mt-0 lg:hidden lg:border-none lg:pt-0">
              <button
                className={cn(
                  'py-2 px-4 rounded-lg inline-flex items-center justify-center text-base font-medium transition-all',
                  isDark
                    ? 'bg-primary text-white'
                    : 'bg-primary text-white lg:bg-white lg:text-primary',
                )}>
                <IconifyIcon
                  icon="lucide:arrow-big-down-dash"
                  className="me-2 h-5 w-5"
                />
                Download
              </button>
            </div>
          </div>
          <div className="hidden items-center lg:flex">
            <button
              className={cn(
                'py-2 px-4 rounded-lg inline-flex items-center justify-center text-base font-medium transition-all',
                isDark
                  ? 'bg-primary text-white'
                  : 'bg-primary text-white lg:bg-white lg:text-primary',
              )}>
              <IconifyIcon
                icon="lucide:arrow-big-down-dash"
                className="me-2 h-5 w-5"
              />
              Download
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
