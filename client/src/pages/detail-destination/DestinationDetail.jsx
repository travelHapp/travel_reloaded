import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DestinationDetail.css';

const DestinationDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const authToken = localStorage.getItem('auth_token');
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.get(`http://localhost:8000/api/${id}`, { headers });

        setDetails(response.data.travel);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los detalles del destino:', error);
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="container">
      {isLoading ? (
        <p>Cargando detalles del destino...</p>
      ) : (
        <div className="show-container">
          <img
            className="show-image" src={`http://localhost:8000/${details.image}`} alt="Imagen del destino"/>
          <div className="text-container">
            <div className="titles-container">
              <h2 className="travel-name">{details.name}</h2>
              <h3 className="travel-location">{details.location}</h3>
            </div>
            <p className="travel-description">{details.description}</p>
          </div>
          <div className="icon-container">
            {/* Puedes agregar contenido adicional aquí */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;
