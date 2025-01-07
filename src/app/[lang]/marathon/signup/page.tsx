'use client';

import { redirect } from 'next/navigation';

export default function GenericMarathonSignupPage() {
  redirect(
    'https://docs.google.com/forms/d/e/1FAIpQLSddi5kG8w0C7QAFlcuMUcj-a7ZrLQ_NxprALHEWrR_xSkJIeg/viewform'
  );

  return (<></>);
}
