import { currentYear } from '@/common/constants.ts';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id='footer' className='fixed bottom-0 end-0 start-0 py-3'>
      <div className='container m-auto'>
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
