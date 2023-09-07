import axios from './axios';

const editDestination = async (id, updatedDestinationData) => {
    try {
      const response = await axios.put(`${BASE_URL}/happy_travel.update/${id}`, updatedDestinationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export default editDestination;