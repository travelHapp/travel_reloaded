import React from 'react'
import './Nav.css'; 
import logo from '../../assets/images/Logo.svg'
import glass from '../../assets/images/Glass-icon.svg'
import Avatar from '../../assets/images/Avatar-icon.svg'
import create from '../../assets/images/Create-icon.svg'
import Logout from '../../assets/images/Logout-icon.svg'
import home from '../../assets/images/Home-icon.svg'
import axios from 'axios';



const Nav = () => {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post('/api/logout');
  
      localStorage.removeItem('auth_token');
  
      window.location.href = '/'; 
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
              <a href="/register" className="nav-link">
                <img className="icon-nav" src={Avatar} alt="icono perfil" />
              </a>
              <a href="/create-destination" className="nav-link">
                <img
                  className="icon-nav" src={create} alt="icono de agregar destino"/>
              </a>
              <a href="/" onClick={handleLogout} className="nav-link">
                <img
                  className="icon-nav" src={Logout} alt="icono de cerrar sesión"
                />
              </a>
              <a href="/" className="nav-link">
                <img
                  className="icon-nav" src={home} alt="icono home"
                />
              </a>
            </div>
          </div>
         
          </div>
          <div className="blue-line"></div>
        </>
      );
    }

export default Nav
