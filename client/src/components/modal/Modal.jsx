import React, { useState } from "react";
import "../../components/modal/Modal.css";

const Modal = (props) => {
    const [isBackgroundVisible, setBackgroundVisibility] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
        setBackgroundVisibility(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setBackgroundVisibility(false);
        props.onClose(); // También puedes cerrar el modal principal aquí si es necesario
    };

    return (
        <div>
            {isBackgroundVisible && (
                <div className="modal-background" onClick={closeModal}></div>
            )}
            <div className={`modal ${props.isOpen ? "open" : ""}`}>
                <div className="modal-content">
                    <span onClick={props.onClose} className="modal-close-btn">
                        &times;
                    </span>
                    <h3 className="modal-title">¿Quieres eliminar este destino?</h3>
                    <div className="modal-buttons">
                        <button type="button" className="accept-button" onClick={props.onDelete}>
                            Aceptar
                        </button>
                        <button type="button" className="cancel-button" onClick={closeModal}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
