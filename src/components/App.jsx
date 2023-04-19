// import { useEffect } from 'react';
import { contactsSlice } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Fiter/Filter';
import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from 'redux/filterSlice';


export function App() {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const setContacts = newContacts => {
  //   _setContacts(newContacts);
  //   localStorage.setItem('contacts', JSON.stringify(newContacts));
  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   } else {
  //     setContacts(defaultContacts);
  //   }
  // }, []);

  const addContact = ({ name, number }) => {
    const value = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (value) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(contactsSlice.actions.addContact({ name, number }));
    }
  };

  const deleteContact = ({ id }) =>
    dispatch(contactsSlice.actions.deleteContact({ id }));

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
