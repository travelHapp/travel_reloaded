import React from 'react'
import './Nav.css'; 
import logo from '../../assets/images/Logo.svg'
import glass from '../../assets/images/Glass-icon.svg'
import Avatar from '../../assets/images/Avatar-icon.svg'
import create from '../../assets/images/Create-icon.svg'
import Logout from '../../assets/images/Logout-icon.svg'
import home from '../../assets/images/Home-icon.svg'


const Nav = () => {
  return (
        <>
          <div className="navbar-content">
            <div className="logo-container">
              <img src={logo} alt="imagen del Logo" />
            </div>
            <div className="search-input-container">
              <form id="search-form" action="/travel/search" method="GET">
                <div className="form-control-container">
                  <input
                    type="text"
                    id="search"
                    name="search"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <img id="search-icon" className="search-icon" src= {glass} alt="icono de búsqueda"/>
                </div>
              </form>
            </div>
            <div className="navbar-icons">
              <a href="/register-user" className="nav-link">
                <img className="icon-nav" src={Avatar} alt="icono perfil" />
              </a>
              <a href="/happy_travel/create" className="nav-link">
                <img
                  className="icon-nav" src={create} alt="icono de agregar destino"/>
              </a>
              <a href="/signout" className="nav-link">
                <img
                  className="icon-nav" src={Logout} alt="icono de cerrar sesión"
                />
              </a>
              <a href="/happy_travel/index" className="nav-link">
                <img
                  className="icon-nav" src={home} alt="icono home"
                />
              </a>
            </div>
          </div>
          <div class="blue-line"></div>

        </>
      );
    }

export default Nav