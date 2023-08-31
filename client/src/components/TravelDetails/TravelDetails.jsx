import React, { useState, useEffect } from 'react';
import apiService from '../../service/service';
import './TravelDetails.css'

const TravelDetails = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await apiService.fetchData();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Travel Details Page</h1>
      {data ? (
        <div className="travel-details-container">
          {data.map((item) => (
            <div key={item.id} className="travel-item">
              <img src={item.image} alt={`Travel ${item.title}`} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default TravelDetails;
