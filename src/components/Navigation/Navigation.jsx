import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={css.home}>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts" className={css.contacts}>Contacts</NavLink>}
    </nav>
  );
};
