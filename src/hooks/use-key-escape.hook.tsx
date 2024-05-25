import { useEffect } from 'react';



export const useKeyEscape = (callback: () => void) => {
  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log(e.key);
        console.log('clicked');
        callback();
      }
    };
    window.addEventListener('keydown', handleKeyEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [callback]);
}