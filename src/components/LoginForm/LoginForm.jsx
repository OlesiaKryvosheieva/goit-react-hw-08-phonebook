import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/thunk";
import css from './LoginForm.module.css'

const  LoginForm = () => {
    const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target
   
    dispatch(login({email: form.elements.email.value, password: form.elements.password.value}))
    form.reset()
  };

  return (
    <form onSubmit={handleSubmit} className={css.form_container}>
      {/* <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button> */}
      <p className={css.form_name}>Log in</p>
      <div className={css.form}>
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email" />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password" />
      <Button variant="contained" type="submit">Log in</Button>
      </div>
      
    </form>
  );
}

export default LoginForm;