import axios from 'axios';

export const fetchCardDetails = async (id, token) => {
  const url = `/api/travel/${id}`;
  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error('Error de autorización');
    } else {
      throw error;
    }
  }
};