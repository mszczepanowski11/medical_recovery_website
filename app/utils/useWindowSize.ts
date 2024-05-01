import { useState, useEffect } from 'react';
import { breakpoint } from './constans';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: any;
    height: any;
    isMobile: boolean | undefined;
    isLaptop: boolean | undefined;
  }>({
    width: undefined,
    height: undefined,
    isMobile: undefined,
    isLaptop: undefined,
  });

  useEffect(() => {
    function handleResize() {
      console.log('window.innerWidth', window.innerWidth, breakpoint);
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= breakpoint.sm,
        isLaptop: window.innerWidth <= breakpoint.md,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
