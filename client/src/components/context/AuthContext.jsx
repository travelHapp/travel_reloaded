import axios from 'axios';
import { createContext, useContext, useState } from 'react';
// Creamos el contexto y lo inicializamos con un objeto vacío
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const setUserAndToken = (user, token) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    setUser(user);
    setToken(token); // Actualizamos el token
  };
  const csrfToken = async () => {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    return true;
  };
  const contextValue = {
    user,
    setUser: setUserAndToken,
    csrfToken,
    token,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};