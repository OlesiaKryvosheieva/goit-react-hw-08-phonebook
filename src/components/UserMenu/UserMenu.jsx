import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/thunk";

export const UserMenu = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.auth.user.email)

  const handleLogout = () => {
    dispatch(logout())
  }
    return <div>
    <p>Hello, {email}</p>
    <button type="button" onClick={handleLogout}>Logout</button>
  </div>
}