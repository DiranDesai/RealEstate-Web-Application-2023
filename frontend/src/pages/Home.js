import React, { useEffect } from "react";
import PropertyList from "../components/PropertyList";
import CategoryList from "../components/CategoryList";
import PropertyHeader from "../components/PropertyHeader";
import UserState from "../context/userContext/userState";
import Banner from "../components/Banner";
import AgentShowCase from "../components/AgentShowCase";
import SponsorListing from "../components/SponsorListing";
import Loader from "../components/Loader";
import useUser from "../hooks/useUser";
import useAuthState from "../hooks/useAuthState";

function Home() {

    const {token} = useAuthState();
    const {getCurrentUser} = useUser();

    useEffect(() => {
      if (token) {
        getCurrentUser();
      }
    }, [token]);


    if (!token) {
      return <Loader />
    }





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
          <div className="container">
            <CategoryList />
          </div>
        </div>
        <AgentShowCase />
        <SponsorListing />
      </section>
    </>
  );
}

export default Home;
