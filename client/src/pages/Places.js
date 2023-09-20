import React, { useEffect, useState } from 'react'

function Places() {
  const [places, setplaces]= useState;
  
useEffect(() => {  // para que no se vaya en bucle 
  const api = PlacesService();
  api.getAll().then(res)
  setPlaces(res.data);
}, [])

    return (
    <div>
        {
            places.map( index) => 
                <Place key={index}>
                          
        }
    </div>
  )


export default Places