import axios from "./axios";

export const deleteCard = async (Id) => {
    try {
      const { token } = useAuth(); // Obtén el token de autenticación
      const response = await axios.delete(`${BASE_URL} ${Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };