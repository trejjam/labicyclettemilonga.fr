import Link from 'next/link';
import Logo from '@/components/Logo.tsx';
import IconifyIcon from '@/components/wrappers/IconifyIcon.tsx';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Locale } from '@/config/i18n.ts';
import { currentYear } from '@/common/constants.ts';
import getLangPrefix from '@/helpers/lang-prefix.ts';

export default function FooterWithInfo({ lang }: { lang: Locale }) {
  const langPrefix = getLangPrefix(lang);

  const { t } = useTranslation({ lng: lang });

  return (
    <footer className='bg-slate-900'>
      <div className='container m-auto lg:px-20'>
        <div className='flex flex-col justify-between gap-14 py-20 lg:flex-row'>
          <div className='mx-12 lg:mx-0 lg:w-4/12'>
            <Link
              href={{ pathname: langPrefix }}
              className='mb-10 flex max-w-64 items-center justify-center'
            >
              <Logo className='fill-bicyclette' />
            </Link>

            <h5 className='mb-4 mt-6 text-base text-slate-300 2xl:text-lg'>
              {t('footer.follow-us')}
            </h5>
            <ul className='flex flex-wrap items-center gap-2'>
              <li>
                <Link
                  href='https://www.facebook.com/groups/labicyclettemilonga/'
                  target='_blank'
                  className='group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-all duration-500'
                >
                  <IconifyIcon
                    icon='lucide:facebook'
                    className='h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-bicyclette'
                  />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.instagram.com/labicyclettemilonga/'
                  target='_blank'
                  className='group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-all duration-500'
                >
                  <IconifyIcon
                    icon='lucide:instagram'
                    className='h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-bicyclette'
                  />
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:danse@labicyclettemilonga.fr'
                  target='_blank'
                  className='group inline-flex h-10 items-center justify-center rounded-lg bg-slate-800 px-5 text-gray-400 transition-all duration-500 hover:fill-white/30 hover:text-bicyclette'
                >
                  <IconifyIcon icon='ix:e-mail' className='mr-2 h-5 w-5' />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='mx-12 lg:mx-0 lg:w-4/12'>
            <div className='grid gap-6'>
              <div className='flex flex-col gap-3 text-gray-200'>
                <h5 className='mb-2 font-semibold lg:text-lg xl:text-xl'>
                  {t('venue.title')}:
                </h5>
                <Link
                  className='underline hover:text-bicyclette'
                  href='https://www.google.com/maps/place/43+Rue+Alfred+Dumeril,+31400+Toulouse,+Francie/@43.5926999,1.4454306,17z'
                  target='_blank'
                >
                  {t('venue.address')}
                  <br />
                  {t('venue.address2')}
                  <br />
                  {t('venue.city')}
                </Link>
              </div>
            </div>
          </div>
          <div className='mx-12 lg:mx-0 lg:w-4/12'>
            <div className='grid gap-6'>
              <div className='flex flex-col gap-3 text-gray-200'>
                <h5 className='mb-2 font-semibold lg:text-lg xl:text-xl'>
                  {t('footer.made-by')}: {t('association.name')}
                </h5>
                <div>
                  {t('association.address')}
                  <br />
                  {t('association.address2')}
                  <br />
                  {t('association.city')}
                </div>
                <div>
                  {t('footer.number')}: {t('association.number')}
                </div>
                <div>
                  {t('footer.siren')}: {t('association.siren')}
                </div>
                <div className='text-nowrap'>
                  {t('footer.iban')}: {t('association.iban')}
                  <br />
                  {t('footer.swift')}: {t('association.swift')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className='text-center text-base font-medium text-gray-400'>
          {currentYear} ©{' '}
          <Link href='https://labicyclettamilonga.fr'>
            labicyclettamilonga.fr
          </Link>
        </p>
      </div>
    </footer>
  );
}
