import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';
import { Button } from '@mui/material';

export const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <Button
              variant="contained"
              size="small"
              type="button"
              onClick={() => ondeleteContact(contact)}
              className={css.btn}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
