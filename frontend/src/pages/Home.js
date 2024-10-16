import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";
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

const newSocket = io("http://localhost:5000");




function Home() {
  const { token } = useAuthState();
  const { getCurrentUser, profileData, getUserNotifications } = useUser();
  const soundNotifyElement = useRef()

  function playSound(){
    soundNotifyElement.current.play()
  }


  useEffect(() => {
    console.log(newSocket);
    
    newSocket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    newSocket.on("message", data => {
      console.log(data)
    })

    newSocket.on("done", data => {
      console.log(data)
    })

    newSocket.on("ReviewCreated", data => {
      playSound()
    })
 
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (token) {
      getCurrentUser();
      getUserNotifications();
    }
  }, [token]);

  if (!token || !profileData) {
    console.log(profileData);
    return <Loader />;
  }

  return (
    <>
      <section className="main">
        
        <div className="container">
          <Banner />
          <audio src="sounds/notify.wav" controls width="200" ref={soundNotifyElement}></audio>
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
      </section>
    </>
  );
}

export default Home;
