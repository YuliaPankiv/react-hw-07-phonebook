import { addContact, deleteContact, fetchContacts } from '../../redux/options';

export const arrThunk = [addContact, deleteContact, fetchContacts];

export const typeAction = type => arrThunk.map(el => el[type]);
export const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.items.push(payload);
};
export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.contacts.items = payload;
};
export const handleDeleteContactsFulfilled = (state, { payload }) => {
  state.contacts.items = payload;
};

export const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};
export const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
// const handleEditFulfilled = (state, { payload }) => {
// state.contacts.items = state.contacts.items.find(
//   //   ({ id }) => id === payload.id
//   // );
// })
// };
