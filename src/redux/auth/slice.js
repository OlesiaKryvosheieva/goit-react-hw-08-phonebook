import { createSlice } from '@reduxjs/toolkit';

import { login, logout, refresh, register } from './thunk';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: null,
  isRefreshed: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = null;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
