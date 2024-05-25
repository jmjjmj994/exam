import { useEffect, useState } from 'react';

export const useMediaMatch = (breakpoint: string | undefined): [boolean] => {
  const [isMobile, setIsMobile] = useState(false);
  const match = window.matchMedia(`(max-width:${breakpoint}px)`);

  useEffect(() => {
    const handleIsMobile = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    match.addEventListener('change', handleIsMobile);
    return () => {
      match.removeEventListener('change', handleIsMobile);
    };
  }, [match]);

  useEffect(() => {
    if (match.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return [isMobile];
};
