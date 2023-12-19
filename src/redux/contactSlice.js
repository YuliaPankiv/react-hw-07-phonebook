import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './options';
import {
  handleAddContactFulfilled,
  handleDeleteContactsFulfilled,
  handleFetchContactsFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
  typeAction,
} from 'components/service/functionsSlice';

// const handleEditFulfilled = (state, { payload }) => {
// state.contacts.items = state.contacts.items.find(
//   //   ({ id }) => id === payload.id
//   // );
// })
// };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addMatcher(isAnyOf(...typeAction('pending')), handlePending)
      .addMatcher(isAnyOf(...typeAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...typeAction('rejected')), handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
