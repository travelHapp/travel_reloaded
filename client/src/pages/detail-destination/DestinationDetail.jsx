import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCardDetails } from '../../service/fetchCardDetails.jsx';
import '../../pages/detail-destination/DestinationDetail.css';
import editIcon from '../../assets/images/Edit-icon.svg'
import deleteIcon from '../../assets/images/Delete-icon.svg';
import Modal from '../../components/modal/Modal';
import { deleteTravel } from '../../service/ApiDeleteTravel';
import Nav from '../../components/nav/Nav';
import axios from 'axios';

export default function DestinationDetail() {
  const { id } = useParams();
  const id2 = parseInt(id);
  const [travel, setDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [element, setElement] = useState({});


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api');
        const data = response.data; // El JSON completo

       
         const filteredElement = data.find(el => el.id === id2);
        setElement(filteredElement);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
  return (<>
  <Nav />
    <div className="container">
      <div className="show-container">
        {element.image && (
          <img
            className="show-image"
            src={`http://127.0.0.1:8000/storage/${element.image}`}
            alt="Imagen del destino"
          />
        )}
        <div className="text-container">
          <div className="titles-container">
            <h2 className="travel-name">{element.name}</h2>
            <h3 className="travel-location">{element.location}</h3>
          </div>
          <p className="travel-description">{element.description}</p>
        </div>
        <div className="icon-container">
          <img className="icon-edit" src={editIcon} alt="icono editar" />
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
    </>
  );
}
