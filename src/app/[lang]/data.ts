import { NavbarLinkProps } from '@/types/props.ts';
import { type I18nFunctionType } from '@/hooks/use-translation.ts';

export function getNavLinks(t: I18nFunctionType): NavbarLinkProps[] {
  return [
    {
      label: t('Home'),
      link: '#home',
    },
    {
      label: 'About',
      link: '#about',
    },
    {
      label: 'Schedule',
      link: '#schedule',
    },
    {
      label: 'Speakers',
      link: '#speakers',
    },
    {
      label: 'Pricing',
      link: '#price',
    },
    {
      label: 'Blog',
      link: '#blog',
    },
  ];
}
