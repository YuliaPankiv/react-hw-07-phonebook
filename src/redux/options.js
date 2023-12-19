import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsApi,
  deleteContactsApi,
  getContactsApi,
} from '../components/service/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await getContactsApi();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts / addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await addContactsApi(contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts / deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteContactsApi(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   'contacts / update',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await EditContactsApi(id);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
