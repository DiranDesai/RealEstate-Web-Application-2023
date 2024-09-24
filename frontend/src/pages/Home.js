import React, { useEffect } from "react";
import PropertyList from "../components/PropertyList";
import CategoryList from "../components/CategoryList";
import PropertyHeader from "../components/PropertyHeader";
import UserState from "../context/userContext/userState";
import Banner from "../components/Banner";
import AgentShowCase from "../components/AgentShowCase";
import SponsorListing from "../components/SponsorListing";
import CategoryHeader from "../components/CategoryHeader";
import Loader from "../components/Loader";
import useUser from "../hooks/useUser";
import useAuthState from "../hooks/useAuthState";
import Footer from "../components/Footer";
//import Footer from "../components/Footer;

function Home() {

    const {token} = useAuthState();
    const {getCurrentUser, profileData} = useUser();


    useEffect(() => {
      if (token) {
        getCurrentUser();
      }
    }, [token]);


    if (!token || !profileData) {
      console.log(profileData);
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
            <CategoryHeader />
            <CategoryList />
          </div>
        </div>
        <AgentShowCase />
        <Footer />
      </section>
    </>
  );
}

export default Home;
