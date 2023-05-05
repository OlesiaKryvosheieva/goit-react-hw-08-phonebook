

import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from 'redux/filter/filterSlice';
import {
  createContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/contactsThunk';
import { useEffect } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { Filter } from 'components/Fiter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

 function Contacts() {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const addContact = ({ name, number }) => {
    const value = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (value) {
      alert(`${name} is already in contacts.`);
    } else {
      const result = createContactThunk({ name, number });

      dispatch(result);
    }
  };

  const deleteContact = ({ id }) => dispatch(deleteContactThunk({ id }));

  const changeFilter = event =>
    dispatch(filterSlice.actions.changeFilter(event.currentTarget.value));

  function getFilterContact() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  return (
    <div className={css.container}>
      
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter}></Filter>
      <ContactList
        onSubmit={addContact}
        contacts={getFilterContact()}
        ondeleteContact={deleteContact}
      />
    </div>
  );
}

export default Contacts