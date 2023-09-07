import React, { useState, useEffect } from 'react';
import DestinationCard from '../../components/destination-card/Card';
import apiService from '../../services/service';
import './Home.css';
import { useAuth } from '../../context/AuthContext';
import ProtectedRoute from '../../components/PrivateRoute';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl = 'http://127.0.0.1:8000/api';
  

  useEffect(() => {
    apiService.getAllDestinations()
      .then(data => {
        setDestinations(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los destinos:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      
      <div className="destination-grid">
        {isLoading ? (
          <p>Cargando destinos...</p>
        ) : (
          destinations.map(travel => (
            <div className="destination-card" key={travel.id}>
              <DestinationCard
                
                travel={travel}
                imageUrl={imageUrl}
                isAuthenticated={true}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
