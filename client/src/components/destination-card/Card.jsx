import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../../assets/images/Info-icon.svg';
import EditIcon from '../../assets/images/Edit-icon.svg';
import DeleteIcon from '../../assets/images/Delete-icon.svg';
import './Card.css';
import { fetchDestinations } from '../../service/service';

const DestinationCard = ({ travel, isAuthenticated }) => {
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {
    fetchDestinations()
      .then(data => {
        setDestinationData(data);
      })
      .catch(error => {
        console.error('Error al obtener los destinos:', error);
      });
  }, []);

  if (!destinationData) {
    return null; // Puedes mostrar un spinner o mensaje de carga aquí
  }

  const selectedDestination = destinationData.find(dest => dest.id === travel.id);

  return (
    <div className="card" style={{ width: '17rem' }}>
      {isAuthenticated && (
        <Link to={`/destination/${travel.id}`} className="card-link">
          <img className="icon-info" src={InfoIcon} alt="icono info" />
        </Link>
      )}
      <img className="card-img-top" src={selectedDestination.image} alt="Card image cap" />
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
        <h5 className="card-title">{selectedDestination.name}</h5>
        <p className="card-text">{selectedDestination.location}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
