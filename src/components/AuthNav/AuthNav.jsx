
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () => {
     return <nav>
          
         <NavLink to="/register" className={css.register}>Register</NavLink>
         <NavLink to="/login"className={css.login}>Log in</NavLink>
        
     </nav>
}

