import React from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../../assets/images/Info-icon.svg';
import EditIcon from '../../assets/images/Edit-icon.svg';
import DeleteIcon from '../../assets/images/Delete-icon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const DestinationCard = ({ travel, isAuthenticated }) => {
  const imageUrl = `http://127.0.0.1:8000${travel.image}`;


  return (
    <div className="card" style={{ width: '17rem' }}>
      {isAuthenticated && (
        <Link to={`/destination/${travel.id}`} className="card-link">
          <img className="icon-info" src={InfoIcon} alt="icono info" />
        </Link>
      )}
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <div className="card-body">
        <div className="icon-container desktop">
          {isAuthenticated && (
            <Link to={`/edit-destination/${travel.id}`} className="card-link">
              <img className="icon-edit" src={EditIcon} alt="icono editar" />
            </Link>
          )}
          {isAuthenticated && (
            <a id="deleteLink" href="#" data-toggle="modal" data-target="#deleteModal">
              <img className="icon-delete" src={DeleteIcon} alt="icono borrar" />
            </a>
          )}
        </div>
        <h5 className="card-title">{travel.name}</h5>
        <p className="card-text">{travel.location}</p>
      </div>
    </div>
  );
};

export default DestinationCard;