import { Params } from '@/app/[lang]/page.tsx';
import GenericMarathonPage from '@/app/[lang]/marathon/page.tsx';

export default function MarathonPage({ params }: { params: Params }) {
  return <GenericMarathonPage params={params} />
}
