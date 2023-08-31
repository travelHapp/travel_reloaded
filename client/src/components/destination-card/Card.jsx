import React from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../../assets/images/Info-icon.svg';
import EditIcon from '../../assets/images/Edit-icon.svg';
import DeleteIcon from '../../assets/images/Delete-icon.svg';
import './Card.css';
const DestinationCard = ({ travel, isAuthenticated, userId }) => {
  
  return (
    <div className="card" style={{ width: '17rem' }}>
      
        <Link to={`/destination/$`} className="card-link">
          <img className="icon-info" src={InfoIcon} alt="icono info" />
        </Link>
      
      <img className="card-img-top" src='https://www.iagua.es/sites/default/files/images/Ca%C3%B1o_Cristales%2C_Meta_3(1).jpg' alt="Card image cap" />
      <div className="card-body">
        <div className="card-text">
          <h5 className="card-title-card">Título Destino</h5>
          <p className="card-description">Descripción destino</p>
        </div>
        <div className="icon-container">
          <Link to={`/edit-destination`} className="card-link">
            <img className="icon-edit" src={EditIcon} alt="icono editar" />
          </Link>
          <a id="deleteLink" href="#" data-toggle="modal" data-target="#deleteModal">
            <img className="icon-delete" src={DeleteIcon} alt="icono borrar" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;