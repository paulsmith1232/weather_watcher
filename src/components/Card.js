import React from 'react'
import PropTypes from 'prop-types'

export default function  Card ({ city, country, description, children }) {
    return (
      <div className='card bg-light  '>
        <h4 className='header-lg center-text'>
          {city}, {country}
        </h4>
       
        <h2 className='center-text'>          
          {description}
        </h2>
        {children}
      </div>        
    )
}

Card.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

