import Link from 'next/link';
import { cn } from '@/helpers/cn.ts';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Locale } from '@/config/i18n.ts';
import getLangPrefix from '@/helpers/lang-prefix.ts';

export default function Links({
  lang,
  className,
}: {
  lang: Locale;
  className: string;
}) {
  let pathName = usePathname();
  const langPrefix = getLangPrefix(lang);

  const { t } = useTranslation({ lng: lang });

  if (pathName.endsWith('/')) {
    pathName = pathName.substring(0, pathName.length - 1);
  }

  const isActive = (link: string): boolean => {
    if (link.endsWith('/')) {
      link = link.substring(0, link.length - 1);
    }

    return link === pathName;
  };

  return (
    <>
      <li className='mb-4 text-center lg:mb-0 lg:text-left'>
        <Link
          href={{ pathname: langPrefix }}
          className={cn(
            className,
            isActive(langPrefix)
              ? 'bg-black/40 text-xl text-bicyclette lg:text-bicyclette'
              : '',
          )}
        >
          {t('menu.milonga')}
        </Link>
      </li>
      <li className='mb-4 text-center lg:mb-0 lg:text-left'>
        <Link
          href={{ pathname: `${langPrefix}marathon/` }}
          className={cn(
            className,
            isActive(`${langPrefix}marathon/`)
              ? 'bg-black/40 text-xl text-bicyclette lg:text-bicyclette'
              : '',
          )}
        >
          {t('menu.marathon')}
        </Link>
      </li>
      <li className='mb-4 hidden text-center lg:mb-0 lg:text-left'>
        <Link
          href={{ pathname: `${langPrefix}team/` }}
          className={cn(
            className,
            isActive(`${langPrefix}team/`)
              ? 'bg-black/40 text-xl text-bicyclette lg:text-bicyclette'
              : '',
          )}
        >
          {t('menu.team')}
        </Link>
      </li>
    </>
  );
}
