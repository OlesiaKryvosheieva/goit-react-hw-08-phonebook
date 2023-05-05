import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/thunk";
import css from './UserMenu.module.css'
import { Button } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.auth.user.email)

  const handleLogout = () => {
    dispatch(logout())
  }
    return <div className={css.user_container}>
    <p className={css.user_email}>Hello, {email}</p>
    <Button variant="outlined"  type="button" onClick={handleLogout} size="small">Log out</Button>
    {/* <button type="button" onClick={handleLogout}>Logout</button> */}
  </div>
}