import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/auth';

const AuthService = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      // Aquí puedes realizar la lógica necesaria para cerrar la sesión del usuario, como eliminar el token de autenticación, etc.
      // Puedes realizar una solicitud al backend si es necesario.
      
      // Ejemplo de borrado de token en localStorage:
      localStorage.removeItem('auth_token');
      
      // Puedes realizar otras acciones necesarias para cerrar la sesión.
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
