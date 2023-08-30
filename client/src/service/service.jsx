import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // Puedes agregar otros encabezados aquí si es necesario
  },
});

export default instance;

// axios.get('/endpoint')
//   .then(response => {
    
//     console.log('Respuesta:', response.data);
    
//     return response.data; 
//   })
//   .catch(error => {
    
//     console.error('Error:', error);
    
//     throw error; 
//   });

