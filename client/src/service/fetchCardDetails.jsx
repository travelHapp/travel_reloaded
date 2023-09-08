import axios from 'axios';

export const fetchDetails = async (id, token) => {
  const url = `/api/travel/${id}`;
  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, headers);
    const travel = response.data;

    if (!travel) {
      throw new Error('El destino de viaje con el ID de 2 no existe.');
    }

    return travel;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error('Error de autorización');
    } else {
      throw error;
    }
  }
};