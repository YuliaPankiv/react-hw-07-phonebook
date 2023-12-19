import axios from 'axios';

axios.defaults.baseURL = 'https://657e2c793e3f5b1894639324.mockapi.io/';

export const getContactsApi = async () => await axios.get('contacts');

export const addContactsApi = async contact =>
  await axios.post('contacts', contact);

export const deleteContactsApi = async id =>
  await axios.delete(`contacts/${id}`);

export const EditContactsApi = async id => await axios.put(`contacts/${id}`);
