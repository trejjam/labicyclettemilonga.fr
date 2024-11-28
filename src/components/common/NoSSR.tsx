import React, { useEffect, useState } from 'react';

export default function NoSSR({
  children,
  skeleton,
}: {
  skeleton?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  if (render) {
    return <>{children}</>;
  }
  if (skeleton) {
    return <>{skeleton}</>;
  }
  return null;
}
