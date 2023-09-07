import React, { useState, useEffect } from 'react';
import DestinationCard from '../../components/destination-card/Card';
import axios from 'axios';
// import apiService from '../../service/service';
import './Home.css';
import { travelService } from '../../service/TravelService';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl = 'http://127.0.0.1:8000/api';
  const isAuthenticated = localStorage.getItem('auth_token') !== undefined;
  const travelApi = travelService();
  
  useEffect(() => {
    axios.get('/sanctum/csrf-cookie').then(res => {
      travelApi.getAllDestinations().then((res) => {
        setDestinations(res.data);
        setIsLoading(false);
        // console.log(res.data);
        

      })
      .catch(error => {
        console.error('Error al obtener los destinos:', error);
        setIsLoading(false);
      });
    }
    );
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
                authenticatedUserId={travel.user_id}
                travel={travel}
                imageUrl={imageUrl}
                isAuthenticated={isAuthenticated} 
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
