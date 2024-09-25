import React, { useEffect, useState } from 'react'
import useWindow from '../hooks/useWindow'

function PropertyHeader() {
  const windowStatus = useWindow();
 


  return (
    <div className='property-header d-flex align-items-center justify-content-between my-5'>
        <div className="header-left">
            <h5>Browse Hot Offers</h5>
            <h4>Latest Properties</h4>
        </div>
        <div className="header-right">
            <div className='d-flex align-items-center'>
                <button className='btn'>{windowStatus ? "" : "All"} Categories</button>
                <button className='btn'>{windowStatus ? "" : "For"} Sale</button>
                <button className='btn'>{windowStatus ? "" : "For"} Lent</button>
            </div>
        </div>
    </div>
  )
}

export default PropertyHeader