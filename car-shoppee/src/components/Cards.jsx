import React from 'react'

function Cards({ image, p_name, price, desc }) {
  return (
        <div className='card border-light'>
            <div className='card-body'>
                <img src={image} className='img-fluid rounded mx-auto d-block pt-4'></img>
                
            </div>
        </div>
  )
}

export default Cards