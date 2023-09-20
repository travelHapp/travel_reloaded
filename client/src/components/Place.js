import React from 'react'

function Place({place}) {
  return (
    <div>
         
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
            
    </div>
  )
}

export default Place