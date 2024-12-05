import { RefObject, useEffect, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutside(callback: {
  (): void;
}): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
}
