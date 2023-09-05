import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link si lo usas
import { fetchCards } from '../../service/api';
import "./CardDetail.css";
import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';
import infoIcon from '../assets/Info.svg';
import { useAuth } from '../../contexts/AuthContext'; // Asegúrate de importar el contexto de autenticación

export default function CardsDetail({ searchValue }) {
  const [travels, setTravels] = useState([]);
  const { user } = useAuth(); // Asegúrate de tener acceso al usuario desde el contexto de autenticación

  useEffect(() => {
    const fetchData = async () => {
      const travels = await fetchCards();
      setTravels(travels);
    };

    fetchData();
  }, []);
  
  console.log(searchValue);

  return (
    <div>
      <div className="card">
        {travels.map((travel) => (
          <div  key={travel.id} className="cards" style={{ width: '18.75rem', height: '25rem' }}>
            {user && (
              <Link to={`/detail/${travel.id}`} className="card-link">
                <img className="icon-info" src={infoIcon} alt="icono info"/>
              </Link>
            )}
            <img className="card-img-top" src={`http://127.0.0.1:8000/${travel.image}`} alt="Card" />
            <div className='date-cards'>
              <div className="card-body">
                <h5 className="card-title">{travel.name}</h5>
                <p className="card-text">{travel.location}</p>
              </div>
              {user && (
                <div>
                  <Link to={`/edit/${travel.id}`} className="card-edit">
                    <img className="icon-cards" src={editIcon} alt="icono de editar destino" />
                  </Link>
                  <Link to={`/delete/${travel.id}`} className="card-delete">
                    <img className="icon-cards" src={deleteIcon} alt="icono de eliminar destino" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
