import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div className="card" style={{ width: '17rem' }}>
      <a href={props.showTravelUrl} className="card-link">
        <img className="icon-info" src={props.infoIconSrc} alt="icono info" />
      </a>
      <img className="card-img-top" src={props.imageSrc} alt="Card image cap" />
      <div className="card-body">
        <div className="icon-container desktop">
          <a href={props.editTravelUrl} className="card-link">
            <img className="icon-edit" src={props.editIconSrc} alt="icono editar" />
          </a>
          <a id="deleteLink" href="#" data-toggle="modal" data-target="#deleteModal">
            <img className="icon-delete" src={props.deleteIconSrc} alt="icono borrar" />
          </a>
        </div>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}



export default Card
