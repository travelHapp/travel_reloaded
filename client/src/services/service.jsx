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
  
    getDestinationById: async (travel) => {
      try {
        const authToken = localStorage.getItem('auth_token');
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.get(`${BASE_URL}${travel}`, { headers });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    editDestination: async (travel, updatedDestinationData) => {
      try {
        const authToken = localStorage.getItem('auth_token');
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
    
        // Obtener los datos actuales del destino
        const currentDestinationResponse = await axios.get(`${BASE_URL}${travel}`, { headers });
        const currentDestinationData = currentDestinationResponse.data.data;
    
        // Combinar los datos actuales con los datos actualizados
        const mergedDestinationData = {
          ...currentDestinationData,
          ...updatedDestinationData,
        };
    
        // Enviar la solicitud PUT con los datos combinados
        const editResponse = await axios.put(`${BASE_URL}${travel}`, mergedDestinationData, { headers });
    
        if (editResponse.status === 200) {
          return editResponse.data; // Puedes devolver los datos actualizados del destino si lo deseas.
        } else {
          throw new Error('La edición del destino no fue exitosa.');
        }
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