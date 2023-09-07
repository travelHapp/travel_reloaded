import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from '../../assets/images/Logo.svg';
import glass from '../../assets/images/Glass-icon.svg';
import Avatar from '../../assets/images/Avatar-icon.svg';
import create from '../../assets/images/Create-icon.svg';
import Logout from '../../assets/images/Logout-icon.svg';
import home from '../../assets/images/Home-icon.svg';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si el usuario está autenticado al cargar el componente
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Establecer el estado de autenticación en función del token
  }, []);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Lógica para cerrar la sesión del usuario
      // Puedes llamar a AuthService.handleLogout() si es necesario
      localStorage.removeItem('token');
      setIsLoggedIn(false);
  
      // Redirigir al usuario a la página de inicio
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logo} alt="imagen del Logo" />
        </div>

        <div className="navbar-right">
          <div className="search-input-container">
            <form id="search-form" action="/travel/search" method="GET">
              <div className="search-container">
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="form-input-search"
                  placeholder="Search..."
                />
                <img
                  id="search-icon"
                  className="search-icon"
                  src={glass}
                  alt="icono de búsqueda"
                />
              </div>
            </form>
          </div>
          <div className="navbar-icons">
            {isLoggedIn ? (
              <>
                <a href="/create-destination" className="nav-link">
                  <img className="icon-nav" src={create} alt="icono de agregar destino" />
                </a>
                <a href="/logout" className="nav-link" onClick={handleLogout}>
                  <img className="icon-nav" src={Logout} alt="icono de cerrar sesión" />
                </a>
              </>
            ) : (
              <a href="/register" className="nav-link">
                <img className="icon-nav" src={Avatar} alt="icono perfil" />
              </a>
            )}
            <a href="/" className="nav-link">
              <img className="icon-nav" src={home} alt="icono home" />
            </a>
          </div>
        </div>
      </div>
      <div className="blue-line"></div>
    </>
  );
};

export default Nav;

