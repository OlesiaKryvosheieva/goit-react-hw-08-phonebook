import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/thunk';
import css from './RegisterForm.module.css';
import { Button, TextField } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form_container}>
      <p className={css.form_name}>Register</p>
      <div className={css.form}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
