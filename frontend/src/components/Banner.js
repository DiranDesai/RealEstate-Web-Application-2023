import React from 'react'
import BannerSearch from './BannerSearch'

function Banner() {
  return (
    <div className="banner">
        <div className="banner-content">
            <h1>Find Your Dream Home</h1>
            <p>From as low as $10 per day with limited time offer discounts</p>
            <div className="banner-control-buttons">
                <button className="btn buy">Buy<i className="bi bi-bag"></i></button>
                <button className="btn rent">Rent<i className="bi bi-house-add"></i></button>
            </div>
            <BannerSearch />
        </div>
    </div>
  )
}

export default Banner