import React from 'react'

function PropertyHeader() {
  return (
    <div className='property-header d-flex align-items-center justify-content-between'>
        <div className="header-left">
            <h5>Browse Hot Offers</h5>
            <h4>Latest Properties</h4>
        </div>
        <div className="header-right">
            <div className='d-flex align-items-center'>
                <button className='btn'>All Categories</button>
                <button className='btn'>For Sale</button>
                <button className='btn'>For Lent</button>
            </div>
        </div>
    </div>
  )
}

export default PropertyHeader