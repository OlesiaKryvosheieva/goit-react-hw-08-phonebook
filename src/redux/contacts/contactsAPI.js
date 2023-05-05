import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const res = await axios('/contacts');

  return res.data;
};

export const addContact = async credentials => {
  const res = await axios.post('/contacts', credentials);

  return res.data;
};

export const deleteContact = async id => {
  const res = await axios.delete(`/contacts/${id}`);

  return await res.data;
};
