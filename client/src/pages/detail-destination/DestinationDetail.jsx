import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Delete from '../../assets/images/Delete-icon.svg';
import Edit from '../../assets/images/Edit-icon.svg';
import './DestinationDetail.css'

const DestinationDetail = ({ match }) => {
  const [travel, setTravel] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const travelId = match.params.id;
        const authToken = localStorage.getItem('auth_token');
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.get(`http://localhost:8000/api/${travelId}`, {
          headers,
        });
        setTravel(response.data);

        // Puedes fetchear los datos del usuario si es necesario
        const userId = response.data.user_id;
        const userResponse = await axios.get(`http://localhost:8000/api/users/${userId}`, {
          headers,
        });
        setUser(userResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [match.params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="show-container">
        <img className="show-image" src={travel.image} alt="Imagen del destino" />
        <div className="text-container">
          <div className="titles-container">
            <h2 className="travel-name">{travel.name}</h2>
            <h3 className="travel-location">{travel.location}</h3>
          </div>
          <p className="travel-description">{travel.description}</p>
        </div>
        <div className="icon-container">
          {/* Renderizar los iconos de editar y eliminar basados en la autenticación del usuario */}
          {user.id === travel.user_id && (
            <>
              <a href={`http://localhost:8000/travel/edit/${travel.id}`}>
                <img className="icon-edit" src={Edit} alt="icono editar" />
              </a>
              <a id="deleteLink" href="../../components/modal/Modal.jsx" data-toggle="modal" data-target="#deleteModal" data-travel-id={travel.id}>
                <img className="icon-delete" src={Delete} alt="icono borrar" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
