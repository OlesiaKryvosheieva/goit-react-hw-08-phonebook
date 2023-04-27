// import { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Fiter/Filter';
import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from 'redux/filterSlice';
import { createContactThunk, deleteContactThunk, getContactsThunk } from 'redux/thunk';
import { useEffect } from 'react';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const addContact = ({ name, phone }) => {
    const value = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (value) {
      alert(`${name} is already in contacts.`);
    } else {
      const result = createContactThunk({ name, phone })
      
      dispatch(result);
    }
  };

  const deleteContact = ({id} ) => dispatch(deleteContactThunk({id} ));

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
      <h1>Phonebook</h1>
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
