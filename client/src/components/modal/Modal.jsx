import React from 'react';

const DeleteConfirmationModal = ({ show, onClose, onDelete }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden={!show}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            ¿Quieres eliminar este elemento?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger accept-button" onClick={onDelete}>Aceptar</button>
            <button type="button" className="btn btn-secondary cancel-button" data-dismiss="modal" onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

