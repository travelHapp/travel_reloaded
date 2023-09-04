import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

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


handleLogout: async () => {
  try {

    await axios.post('http://127.0.0.1:8000/api/logout');

    localStorage.removeItem('token');

   
  } catch (error) {
    console.error(error);
  }
},

};

export default AuthService;
