import { Outlet } from 'react-router-dom';

import AppBar from './AppBar/AppBar';

function Layout() {
  return (
    <div>
     <AppBar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
