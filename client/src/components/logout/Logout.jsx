import { useEffect } from 'react';
import AuthService from '../../service/AuthService';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await AuthService.handleLogout();

        navigate('/');

        console.log('Logout exitoso');
      } catch (error) {
        console.error(error);
      }
    };

    handleLogout();
  }, [navigate]);

  return null;
};

export default Logout;



