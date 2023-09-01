import React, { useState, useEffect } from 'react';
import '../../components/TravelDetails/TravelDetails.css'
import axios from 'axios';

const TravelDetails = () => {
  const [travel, setTravel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('auth_token');
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.get('http://localhost:8000/api', { headers });
        setTravel(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="show-container">
        <img className="show-image" src={travel.image} alt="Imagen del destino" />
        <div className="text-container">
          <div className="titles-container">
            <h2 className="travel-name">{travel.id}</h2>
            <h3 className="travel-location">{travel.title}</h3>
          </div>
          <p className="travel-description">{travel.description}</p>
        </div>
        {/* Aquí puedes agregar el renderizado condicional para los íconos de editar y borrar */}
      </div>
    </div>
  );
};


export default TravelDetails;
