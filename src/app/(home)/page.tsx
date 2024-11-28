import GenericHomePage, { Params } from '@/app/[lang]/page.tsx';

export default function HomePage({ params }: { params: Params }) {
  return <GenericHomePage params={params} />;
}
