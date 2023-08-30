import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import DestinationCard from '../../components/destination-card/Card';
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
        <DestinationCard/>
    </>
  );
};

export default Home;
