import { useEffect, useState } from 'react';

export default function useScrollEvent() {
  const [scrollPassed, setScrollPassed] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setScrollPassed(
      ((window.scrollY + window.innerHeight) * 100) / document.body.offsetHeight
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    setScrollY(window.scrollY);
    setScrollHeight(document.body.offsetHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollPassed,
    scrollY,
    scrollHeight,
  };
}
