import { useEffect, useState } from 'react';

export const useHeaderHeight = () => {
  const [headHeight, setHeadHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('header');

    if (header === null) return;

    setHeadHeight(header.getBoundingClientRect().height);

    const resizeObserver = new ResizeObserver(() => {
      setHeadHeight(header.getBoundingClientRect().height);
    });
    resizeObserver.observe(header);

    return () => resizeObserver.disconnect();
  }, []);

  return headHeight;
};
