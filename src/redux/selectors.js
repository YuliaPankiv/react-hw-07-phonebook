import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  return state.contacts.contacts.items;
};
export const selectFilter = state => {
  return state.filter.filter;
};

export const filterContacts = createSelector(
  selectContacts,
  selectFilter,
  (contacts, filter) => {
    return filter
      ? contacts.filter(item => item.name.toLowerCase().includes(filter))
      : contacts;
  }
);
