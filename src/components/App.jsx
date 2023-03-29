import { useState, useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Fiter/Filter';
import contacts from './contacts.json';
import css from 'components/ContactForm/ContactForm.module.css';

const arrOfcontacts = contacts;

export function App() {
  const [contacts, setContacts] = useState(arrOfcontacts);
  const [filter, setFilter] = useState('');

  const firstRender = useRef(true);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
