import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  getContactsThunk,
  createContactThunk,
  deleteContactThunk,
} from './thunk';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
        state.contacts.error = '';
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(createContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(createContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push({
          id: payload.id,
          name: payload.name,
          phone: payload.phone,
        });
        state.contacts.error = '';
      })
      .addCase(createContactThunk.rejected, (state, { payload }) => {
        console.log('rejected');
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        const index = state.contacts.items.findIndex(
          item => item.id === payload.id
        );
        state.contacts.items.splice(index, 1);
        state.contacts.error = '';
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
