import axios from 'axios';

// Configuración global de Axios
const instance = axios.create({
  baseURL: 'http://localhost:8000/api', 
  timeout: 3000, 
});


// Interceptor para agregar el token de autenticación en las solicitudes
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agrega el token al encabezado de la solicitud
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta globalmente
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Aquí puedes manejar los errores de respuesta, como redirección a la página de inicio de sesión en caso de un error 401 (no autorizado)
    return Promise.reject(error);
  }
);

export default instance;
