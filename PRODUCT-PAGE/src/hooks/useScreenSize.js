import { useEffect, useState } from 'react';

export function useScreenSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = (e) => {
    const { innerWidth: width, innerHeight: height } = e.target;
    setSize({ height, width });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return window.removeEventListener('resize', handleResize);
  }, []);

  return { size, isMobile: size.width <= 400 };
}
