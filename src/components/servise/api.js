import axios from 'axios';

axios.defaults.baseURL = 'https://657e2c793e3f5b1894639324.mockapi.io/';

export const getContactsApi = async () => await axios.get('contacts');

export const addContactsApi = async contact =>
  await axios.post('contacts', contact);

export const deleteContactsApi = async id =>
  await axios.delete(`contacts/${id}`);

export const EditContactsApi = async id => await axios.put(`contacts/${id}`);

// fetch('https://PROJECT_TOKEN.mockapi.io/tasks/1', {
//   method: 'PUT', // or PATCH
//   headers: { 'content-type': 'application/json' },
//   body: JSON.stringify({ completed: true }),
// })
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     // handle error
//   })
//   .then(task => {
//     // Do something with updated task
//   })
//   .catch(error => {
//     // handle error
//   });
