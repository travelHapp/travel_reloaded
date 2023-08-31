import axios from 'axios';

const apiService = {
  fetchData: async () => {
    try {
      const authToken = localStorage.getItem('auth_token'); // Obtener el token almacenado en localStorage
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.get('http://localhost:8000/api', { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
export default apiService;