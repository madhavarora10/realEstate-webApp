'use client';

import { useRef } from 'react';
import { useStore } from '../index';

export const StoreInitialization = ({ location, price, type }:{ location:string, price:number, type:string }) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ location, type, price });
    initialized.current = true;
  }
  return null;
};
