/* eslint-disable max-len */
import { useState, useEffect } from 'react';

// interface WindowSize {
//   width: number;
//   height: number;
// }
function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height }:{ innerWidth:number, innerHeight:number } = window;
    return {
      width,
      height,
    };
  }
  return 0;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
