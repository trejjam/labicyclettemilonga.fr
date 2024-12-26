'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Locale } from '@/config/i18n.ts';
import { cn } from '@/helpers/cn.ts';
import { useTranslation } from '@/hooks/use-translation.ts';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import type { Swiper as SwiperClass } from 'swiper/types';
import { useRouter } from 'next/navigation';
import { Route } from 'next';
import useScrollEvent from '@/hooks/use-scroll-event.ts';

interface Submenu {
  id: number;
  key: string;
  hash: string;
  translation: string;
  target: HTMLElement;
}

export default function SecondaryNavbar({
  currentRoute,
  nav,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDark,
  lang,
}: {
  currentRoute: string;
  nav: boolean;
  isDark?: boolean;
  lang: Locale;
}) {
  const router = useRouter();
  const { t } = useTranslation({ lng: lang });
  const { scrollY } = useScrollEvent();

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState(0);
  const [submenu, setSubmenu] = useState<Array<Submenu>>([]);

  useEffect(() => {
    const i = currentRoute.indexOf('/');
    const routeKey =
      currentRoute === ''
        ? 'milonga'
        : i > 0
          ? currentRoute.substring(0, i)
          : currentRoute;

    const routeSubmenu = t(`${routeKey}.submenu`, {
      returnObjects: true,
    });

    const items: Array<Submenu> = [];

    let submenuId = 0;
    for (const [key, value] of Object.entries(routeSubmenu)) {
      const htmlElement = document.getElementById(key);

      if (htmlElement === null) {
        continue;
      }

      items.push({
        id: submenuId,
        key: key,
        hash: `#${key}`,
        translation: value as string,
        target: htmlElement,
      });

      submenuId++;
    }

    setSubmenu(items);
  }, [currentRoute, t]);

  const submenuClick = useCallback(
    (item: Submenu) => {
      router.push(item.hash as Route);

      swiper?.slideTo(item.id);
    },
    [swiper, router]
  );

  const submenuClickEvent = (item: Submenu) => (event: MouseEvent) => {
    event.preventDefault();

    return submenuClick(item);
  };

  useEffect(() => {
    const innerHalfHeight = window.innerHeight / 2;

    let submenuCandidate: Submenu | undefined = undefined;
    for (const item of submenu) {
      const startsAt = item.target.getBoundingClientRect().top;

      if (startsAt < innerHalfHeight || submenuCandidate === undefined) {
        submenuCandidate = item;
      } else {
        break;
      }
    }

    if (submenuCandidate !== undefined) {
      setActiveSubmenu(submenuCandidate.id);
      swiper?.slideTo(submenuCandidate.id);
    }
  }, [swiper, scrollY, submenu, setActiveSubmenu]);

  if (submenu.length === 0) {
    return <></>;
  }

  return (
    <div
      className={cn(nav ? 'hidden' : '', 'relative z-10 px-4 pt-2 text-white')}
    >
      <Swiper
        spaceBetween={40}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView='auto'
        initialSlide={activeSubmenu}
        onSwiper={setSwiper}
      >
        {submenu.map((item, i) => (
          <SwiperSlide
            key={i}
            className='!w-auto shrink-0 p-2'
          >
            <Link
              className={cn(
                'px-2 py-1',
                activeSubmenu === item.id
                  ? 'rounded-md bg-white/20 text-xl text-bicyclette lg:bg-black/40'
                  : ''
              )}
              href={{ hash: item.hash }}
              onClick={(e) => submenuClickEvent(item)(e)}
            >
              {item.translation}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
