import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const apiService = {
  getAllDestinations: async () => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.get(`${BASE_URL}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  
  createDestination: async (newDestinationData) => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.post(`${BASE_URL}/happy_travel.store`, newDestinationData, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getDestinationById: async (Id) => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.get(`${BASE_URL}${Id}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateDestination: async (Id, updatedDestinationData) => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.put(`${BASE_URL}${Id}`, updatedDestinationData, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteDestination: async (Id) => {
    try {
      const authToken = localStorage.getItem('auth_token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.delete(`${BASE_URL} ${Id}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
export default apiService;