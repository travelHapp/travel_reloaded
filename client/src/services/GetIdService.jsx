import axios from './axios';

const getDestinationById = async (id) => {
    
  try {
    const response = await axios.get(`${BASE_URL}/happy_travel.show/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getDestinationById;
