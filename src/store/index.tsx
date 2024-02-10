import { create } from 'zustand';

export const useStore = create<{
  location:string,
  price:number,
  type:string
}>(() => ({
  location: '',
  price: 0,
  type: '',
}));
