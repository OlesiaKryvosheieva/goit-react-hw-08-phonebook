import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const state = { name, number };

  const idName = nanoid();
  const idNumber = nanoid();

  function handleNameChange(event) {
    setName(event.currentTarget.value);
  }
  function handleNumberChange(event) {
    setNumber(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(state);
    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={css.form_container}>
      <div className={css.form}>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          id={idName}
        />
        <TextField
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          id={idNumber}
          className={css.input}
        />
        <Button variant="contained" type="submit" className={css.btn}>
          Add contact
        </Button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
