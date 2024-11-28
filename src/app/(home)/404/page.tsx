import GenericNotFoundPage from '@/app/[lang]/404/page.tsx';
import { Params } from '@/app/[lang]/page.tsx';

export default function NotFoundPage({ params }: { params: Params }) {
  return <GenericNotFoundPage params={params} />;
}
