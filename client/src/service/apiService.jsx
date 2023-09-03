import axios from 'axios';

const apiService = {
  fetchData: async () => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.get('http://localhost:8000/api', { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  fetchDestinationDetail: async (destinationId) => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.get(`http://localhost:8000/api/destination/${destinationId}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
