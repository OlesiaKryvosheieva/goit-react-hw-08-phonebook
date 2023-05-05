import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      return { filter: action.payload };
    },
  },
});

export const filterReducer = filterSlice.reducer;
