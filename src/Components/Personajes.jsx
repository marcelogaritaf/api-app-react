import React from 'react'
import "./styles.css"
const Personajes = ({personaje}) => {
    const {name, species, image,gender, status}=personaje
  return (
    <div className='col-md-4 mb-2'>
        <div className="card">
            <img src={image} alt={`imagen=${name}`} className='card-img-top'/>
            <div className="card-body">
                <h5>{name}</h5>
                <p>{species}</p>
                <p>{gender}</p>
                <p>{status}</p>
            </div>
        </div>
    </div>
  )
}

export default Personajes