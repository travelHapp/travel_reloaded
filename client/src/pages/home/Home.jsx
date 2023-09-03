import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import DestinationCard from '../../components/destination-card/Card';
import apiService from '../../service/service';
import './Home.css';

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
      <div className="destination-grid">
        {isLoading ? (
          <p>Cargando destinos...</p>
        ) : (
          destinations.map(travel => (
            <div className="destination-card" key={travel.id}>
              <Link to={`/destination/${travel.id}`}>
                <DestinationCard
                  travel={travel}
                  imageUrl={imageUrl}
                  isAuthenticated={false}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
