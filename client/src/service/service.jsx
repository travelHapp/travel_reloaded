// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
// });

// export const fetchDestinations = () => {
//   return instance.get('/travels')
//     .then(response => {
//       console.log('Respuesta de la API:', response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.error('Error al obtener la lista de destinos:', error);
//       throw error;
//     });
// };

import axios from 'axios';

export const fetchDestinations = () => {
  return axios.get('http://127.0.0.1:8000/api/travels')
    .then(response => {
      console.log('Respuesta de la API:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error al obtener la lista de destinos:', error);
      throw error;
    });
};





