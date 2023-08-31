import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css'

const Modal = ({ travelId, onCancel, onSuccess }) => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
    onCancel();
  };

  const handleDelete = () => {
    axios.delete(`/api/travels/${travelId}`)
      .then(response => {
        if (response.data.success) {
          onSuccess();
        } else {
          console.error('Error al eliminar');
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-body">
              ¿Quieres eliminar este elemento?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger accept-button" onClick={handleDelete}>Aceptar</button>
              <button type="button" className="btn btn-secondary cancel-button" onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;