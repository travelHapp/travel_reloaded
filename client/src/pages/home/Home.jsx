import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import DestinationCard from '../../components/destination-card/Card';
import apiService from '../../service/service';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl = 'http://127.0.0.1:8000/api';

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
      {isLoading ? (
        <p>Cargando destinos...</p>
      ) : (
        <div className="destination-card-list">
          {destinations.map(travel => (
            <DestinationCard
              key={travel.id}
              travel={travel}
              imageUrl={imageUrl}
              isAuthenticated={false}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
