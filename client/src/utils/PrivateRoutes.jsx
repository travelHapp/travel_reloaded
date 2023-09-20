import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const PrivateRoutes = ({children}) => {
    const auth =localStorage.getItem('auth_token')
  return(
    auth ? (<Outlet />) : (<Navigate to="/login" />)
  )
    
}

export default PrivateRoutes;