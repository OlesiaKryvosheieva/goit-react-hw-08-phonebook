import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Fiter/Filter';
import defaultContacts from './contacts.json';
import css from 'components/ContactForm/ContactForm.module.css';

export function App() {
  const [contacts, _setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const setContacts = newContacts => {
    _setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      setContacts(defaultContacts);
    }
  }, []);

  function addContact({ name, number }) {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const value = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (value) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function changeFilter(event) {
    setFilter(event.currentTarget.value);
  }

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
