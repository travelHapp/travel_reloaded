import React, { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
        try {
            const csrfToken = window.csrfToken;
          const token = localStorage.getItem('token');
      
          await axios.post('http://127.0.0.1:8000/api/logout', {}, {
            headers: {
              'X-CSRF-TOKEN': csrfToken,
              'Authorization': `Bearer ${token}`,
            },
          });
      
          localStorage.removeItem('token');
      
          window.location.href = '/';

          console.log('Logout exitoso');
        } catch (error) {
          console.error(error);
        }
      };
      

    handleLogout();
  }, []);

  return null;
};

export default Logout;
