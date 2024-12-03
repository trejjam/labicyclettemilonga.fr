import { Locale } from '@/config/i18n.ts';
import { HTMLProps } from 'react';

export type Params = Promise<{ lang: Locale }>;

export type NavbarLinkProps = {
  label: string;
  link: string;
};

export type ClassNameProps = HTMLProps<HTMLElement>["className"];
