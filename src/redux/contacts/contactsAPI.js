import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const res = await axios('/contacts');
  console.log('fetch');
  return res.data;
};

export const addContact = async credentials => {
  const res = await axios.post('/contacts', credentials);
  console.log(res);
  return res.data;
};

export const deleteContact = async id => {
  const res = await axios.delete(`/contacts/${id}`);
  console.log('delete');
  return await res.data;
};
