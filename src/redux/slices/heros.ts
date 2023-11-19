/* eslint-disable no-param-reassign */
// framework
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// other
import {
  HeroType,
} from '../../common/types';

export interface HeroState {
  hero: HeroType | any,
}

const initialState: HeroState = {
  hero: undefined,
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setHero: (
      state: HeroState,
      action: PayloadAction<HeroType>,
    ) => {
      state.hero = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHero,
} = heroSlice.actions;

export default heroSlice.reducer;
