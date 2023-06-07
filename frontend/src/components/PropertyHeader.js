import React, { useEffect, useState } from 'react'

function PropertyHeader() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const innerWid = window.innerWidth;
    if (innerWid < 900) {
      setStatus(true);
    } else {
      setStatus(false);
    }

    console.log(innerWid);
  }, [window.innerWidth]);


  return (
    <div className='property-header d-flex align-items-center justify-content-between'>
        <div className="header-left">
            <h5>Browse Hot Offers</h5>
            <h4>Latest Properties</h4>
        </div>
        <div className="header-right">
            <div className='d-flex align-items-center'>
                <button className='btn'>{status ? "" : "All"} Categories</button>
                <button className='btn'>{status ? "" : "For"} Sale</button>
                <button className='btn'>{status ? "" : "For"} Lent</button>
            </div>
        </div>
    </div>
  )
}

export default PropertyHeader