// import { useEffect } from 'react';
import { contactsSlice } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Fiter/Filter';
// import defaultContacts from './contacts.json';
import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector} from 'react-redux';



export function App() {
  // const [contacts, _setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const {contacts} = useSelector(state => state.contacts)
  // const filter = useSelector(state => state.filter)
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

  const addContact = ({name, number}) =>  dispatch(contactsSlice.actions.addContact({name, number}));
    // const value = contacts.find(
    //   contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    // );
    // if (value) {
    //   alert(`${name} is already in contacts.`);
    // } else {
    //   setContacts([newContact, ...contacts]);
    // }
  

  const deleteContact = ({id}) => dispatch(contactsSlice.actions.deleteContact({id}))

  // function changeFilter(event) {
  //   setFilter(event.currentTarget.value);
  // }

  // function getFilterContact() {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // }

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter}></Filter> */}
      <ContactList
        onSubmit={addContact}
        contacts={contacts}
        // contacts={getFilterContact()}
        ondeleteContact={deleteContact}
      />
    </div>
  );
}
