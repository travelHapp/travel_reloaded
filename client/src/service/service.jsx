import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Authorization': 'Bearer your_access_token',
    'Content-Type': 'application/json',
    'Accept': 'application/json',

  },
});

export default instance;

axiosInstance.get('/endpoint')
  .then(response => {
    
    console.log('Respuesta:', response.data);
    
    return response.data; 
  })
  .catch(error => {
    
    console.error('Error:', error);
    
    throw error; 
  });

