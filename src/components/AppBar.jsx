import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav/AuthNav';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
