import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => ondeleteContact(contact.id)}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
