import React, { useState, useEffect } from 'react';
import Card from '../../components/destination-card/Card';

import Nav from '../../components/nav/Nav';
const Home = () => {
  const [travels, setTravels] = useState([]);

//   useEffect(() => {
    
//     axios.get('/travels')
//       .then(response => {
//         setTravels(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching travel data:', error);
//       });
//   }, []);

  return (
    <>
        <Nav/>
        <div className="row">
        {travels.map(travel => (
            <div key={travel.id} className="col-md-3 col-sm-6">
            <div className="mx-auto">
                {/* Reemplaza "Card" con el componente de tarjeta que quieras usar */}
                <Card
                travel={travel}
                // isAuthenticated=
                // userId= 
                />
            </div>
            </div>
        ))}
        </div>
    </>
  );
};

export default Home;
