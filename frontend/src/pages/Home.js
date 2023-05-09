import React from 'react'
import PropertyList from '../components/PropertyList'
import CategoryList from '../components/CategoryList'
import PropertyHeader from '../components/PropertyHeader'
import UserState from '../context/userContext/userState'
import Banner from '../components/Banner'
import AgentShowCase from '../components/AgentShowCase'
import SponsorListing from '../components/SponsorListing'
import Loader from '../components/Loader'

function Home() {
  return (
    <>
        <section className="main">
            <div className="container">
                <Banner />
            </div>
            <div className="property-listing-container">
                <div className="container">
                    <PropertyHeader />
                    <PropertyList />
                </div>
            </div>
            <div className="category-listing-container mt-5">
                <div className='container'>
                    <CategoryList />
                </div>
            </div>
            <AgentShowCase />
            <SponsorListing />
        </section>
        <Loader />
    </>
  )
}

export default Home