import { useState, useEffect } from 'react';

/**
 * window width, height 받아오는 훅
 * @example   const {windowSize: { width }} = useWindowSize();
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window === 'undefined' ? 0 : window.innerWidth,
    height: typeof window === 'undefined' ? 0 : window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return { windowSize };
};

export default useWindowSize;
