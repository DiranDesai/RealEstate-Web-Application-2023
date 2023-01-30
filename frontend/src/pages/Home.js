import React from 'react'
import PropertyList from '../components/PropertyList'
import CategoryList from '../components/CategoryList'
import PropertyHeader from '../components/PropertyHeader'
import UserState from '../context/userContext/userState'

function Home() {
  return (
    <>
        <section className="main">
            <div className="property-listing-container">
                <div className="container">
                    <PropertyHeader />
                    <PropertyList />
                </div>
            </div>
            <div className="category-listing-container mt-5">
                <div className='container'>
                    <h4 className='heading'>CATEGORIES</h4>
                    <CategoryList />
                </div>
            </div>
        </section>
        <div className={`loader-wrapper`}>
            <div className="loader"></div>
        </div>
    </>
  )
}

export default Home