'use client';

import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export const Scroll = () => {
  const [latestScrollValue, seLtatestScrollValue] = useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    seLtatestScrollValue(latest);
  });
  //   console.log(latestScrollValue);
  return latestScrollValue;
};
