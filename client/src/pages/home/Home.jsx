import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import DestinationCard from '../../components/destination-card/Card';
import apiService from '../../service/service';
import './Home.css';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiService.fetchData()
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
      <Nav />
      <div className="destination-grid">
        {isLoading ? (
          <p>Cargando destinos...</p>
        ) : (
          destinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <DestinationCard
                travel={destination}
                isAuthenticated={false} 
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
