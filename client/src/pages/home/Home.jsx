import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import DestinationCard from '../../components/destination-card/Card';
import apiService from '../../service/service'; // Asegúrate de que la ruta sea correcta

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
      {isLoading ? (
        <p>Cargando destinos...</p>
      ) : (
        <div className="destination-card-list">
          {destinations.map(destination => (
            <DestinationCard
              key={destination.id}
              travel={destination}
              isAuthenticated={false} // Aquí puedes pasar el valor correcto
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
