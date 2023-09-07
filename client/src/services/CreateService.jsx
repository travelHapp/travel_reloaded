import axios from './axios';
import { useAuth } from './AuthContext'; // Importa tu contexto de autenticación

const BASE_URL = 'http://localhost:8000/api'; // Reemplaza con la URL de tu API

const createDestination = async (newDestinationData) => {
    try {
      const response = await axios.post(`${BASE_URL}/happy_travel.store`, newDestinationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
export default createDestination;