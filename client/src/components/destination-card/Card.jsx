import React from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../../assets/images/Info-icon.svg';
import EditIcon from '../../assets/images/Edit-icon.svg';
import DeleteIcon from '../../assets/images/Delete-icon.svg';
import EditDestination from '../../pages/edit-destination/EditDestination';
import './Card.css'

const DestinationCard = ({ travel, isAuthenticated, userId }) => {
    const mainImageUrl = 'https://cdn.pixabay.com/photo/2023/08/19/05/31/green-sea-turtle-8199770_1280.jpg';
  return (
    <div className="card" style={{ width: '17rem' }}>
      
        <Link to={`/destination/$`} className="card-link">
          <img className="icon-info" src={InfoIcon} alt="icono info" />
        </Link>
      
      <img className="card-img-top" src={mainImageUrl} alt="Card image cap" />
      <div className="card-body">
        <div className="icon-container desktop">
          
            <Link to={`/edit-destination`} className="card-link">
              <img className="icon-edit" src={EditIcon} alt="icono editar" />
            </Link>
          
         
            <a id="deleteLink" href="#" data-toggle="modal" data-target="#deleteModal">
              <img className="icon-delete" src={DeleteIcon} alt="icono borrar" />
            </a>
          
        </div>
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default DestinationCard;
