import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from './Layout';
import Contacts from 'pages/Contacts';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  refresh } from 'redux/auth/thunk';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const isRefreshed = useSelector(state => state.auth.isRefreshed);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div>
      {!isRefreshed && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              } />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LogIn} redirectTo="/contacts" />
              }
            />
            <Route path="contacts" element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              } />
          </Route>
        </Routes>
      )}
    </div>
  );
}
