import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({component: Component, redirectTo = '/'}) =>{
const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
const isRefreshed =useSelector(state => state.auth.isRefreshed)
const shouldRedirect = !isLoggedIn && !isRefreshed

return shouldRedirect ? <Navigate to ={redirectTo} /> : <Component/>
}