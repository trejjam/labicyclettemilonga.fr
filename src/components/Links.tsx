import Link from 'next/link';
import { cn } from '@/helpers/cn.ts';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Locale } from '@/config/i18n.ts';
import getLangPrefix from '@/helpers/lang-prefix.ts';

export default function Links(
  {
    lang,
    className,
  }: {
    lang: Locale,
    className: string,
  },
) {
  const pathName = usePathname();
  const langPrefix = getLangPrefix(lang);

  const { t } = useTranslation({ lng: lang });

  const isActive = (link: string): boolean => {
    console.log(link === pathName, link , pathName);
    return link === pathName;
  };

  return (<>
    <li className="text-center lg:text-left mb-4 lg:mb-0">
      <Link
        href={{ pathname: langPrefix }}
        className={cn(
          className,
          isActive(langPrefix)
            ? 'bg-black/40 text-bicyclette text-xl'
            : '',
        )}
      >
        {t('menu.milonga')}
      </Link>
    </li>
    <li className="text-center lg:text-left mb-4 lg:mb-0">
      <Link
        href={{ pathname: `${langPrefix}marathon` }}
        className={cn(
          className,
          isActive(`${langPrefix}marathon`)
            ? 'bg-black/40 text-bicyclette text-xl'
            : '',
        )}
      >
        {t('menu.marathon')}
      </Link>
    </li>
    <li className="text-center lg:text-left mb-4 lg:mb-0">
      <Link
        href={{ pathname: `${langPrefix}team` }}
        className={cn(
          className,
          isActive(`${langPrefix}team`)
            ? 'bg-black/40 text-bicyclette text-xl'
            : '',
        )}
      >
        {t('menu.team')}
      </Link>
    </li>
  </>);
}
