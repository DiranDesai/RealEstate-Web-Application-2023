import React from 'react'

function CategoryList() {
  return (
    <div className='row g-5 category-listing-wrapper'>
        <div className="col-3">
            <div className="card">
                <div className="inner-content">
                    <i className="bi bi-building-fill"></i>
                    <h5>Apartments</h5>
                    <p>4 Listings</p>
                    <button className='btn'>View Category</button>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <div className="inner-content">
                    <i className="bi bi-bag-fill"></i>
                    <h5>Commercial</h5>
                    <p>3 Listings</p>
                    <button className='btn'>View Category</button>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <div className="inner-content">
                    <i className="bi bi-buildings"></i>
                    <h5>Office</h5>
                    <p>1 Listings</p>
                    <button className='btn'>View Category</button>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <div className="inner-content">
                    <i className="bi bi-amd"></i>
                    <h5>Restaurant</h5>
                    <p>2 Listings</p>
                    <button className='btn'>View Category</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryList