import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  balance: number;
};

const initialState: AppState = {
  balance: 1000,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
  },
});

export const { addBalance } = appSlice.actions;

export const appReducer = appSlice.reducer;
