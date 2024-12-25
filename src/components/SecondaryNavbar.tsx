'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Locale } from '@/config/i18n.ts';
import { cn } from '@/helpers/cn.ts';
import { useTranslation } from '@/hooks/use-translation.ts';
import { useHash } from '@/hooks/use-hash.ts';

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
  const hash = useHash();
  const { t } = useTranslation({ lng: lang });

  console.log(currentRoute);

  return (
    <div
      className={cn(nav ? 'hidden' : '', 'relative z-10 px-4 py-2 text-white')}
    >
      <Swiper
        spaceBetween={40}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView='auto'
      >
        <SwiperSlide className='!w-auto shrink-0'>{t('submenu.1')}</SwiperSlide>
        <SwiperSlide className='!w-auto shrink-0'>{hash}</SwiperSlide>
        <SwiperSlide className='!w-auto shrink-0'>Slide 3</SwiperSlide>
        <SwiperSlide className='!w-auto shrink-0'>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
