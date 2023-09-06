import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { fetchCardDetails } from '../../service/CardDetail';
import '../../pages/detail-destination/DestinationDetail.css';
import editIcon from '../../assets/images/Edit-icon.svg'
import deleteIcon from '../../assets/images/Delete-icon.svg';
import Modal from '../../components/modal/Modal';
import { deleteTravel } from '../../service/ApiDeleteTravel'; 

export default function DestinationDetail() {
  const { id } = useParams();
  const [travel, setDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchDetails = async () => {
      const travelDetails = await fetchCardDetails(id); 
      setDetails(travelDetails); 
    };

    fetchDetails();
  }, [id]);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
      
  const handleDelete = async () => {
    try {
      console.log('Eliminando elemento con ID:', id);
  
      await deleteTravel(id); 
  
  
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
    }
  };


  return (
    <div className="container">
      <div className="show-container">
        <img
          className="show-image"
          src={`http://127.0.0.1:8000/${travel.image}`}
          alt="Imagen del destino"
        />
        <div className="text-container">
          <div className="titles-container">
            <h2 className="travel-name">{travel.name}</h2>
            <h3 className="travel-location">{travel.location}</h3>
          </div>
          <p className="travel-description">{travel.description}</p>
        </div>
        <div className="icon-container"> 
          {/* <Link to={`/edit/${details.id}`}> */}
            <img className="icon-edit" src={editIcon} alt="icono editar" />
          {/* </Link> */}

          <img className="icon-delete" src={deleteIcon} alt="icono borrar" onClick={handleDeleteClick} />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDelete}
        confirmationMessage="¿Quieres eliminar este destino?"
      />
    </div>
  );
}
