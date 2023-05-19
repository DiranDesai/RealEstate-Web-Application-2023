import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// PAGES IMPORTS
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AgentsListing from "./pages/AgentsListing";
import Category from "./pages/Category";
import Property from "./pages/Property";
import CreateEstate from "./pages/CreateEstate";

// COMPONENTS IMPORTS
import "./App.css";
import Navbar from "./components/Navbar";

import authContext from "./context/authContext/authContext";
import useUser from "./hooks/useUser";

function App() {
  const { token } = useContext(authContext);

  const {getCurrentUser, profileData} = useUser();

  console.log(profileData);

  useEffect(() => {
    getCurrentUser();
  }, [profileData]);


  return (
    <>
      <Router>
        {token && <Navbar />}
        <div className="app-wrapper">
        <Routes>
          <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} exact />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/create" element={token ? <CreateEstate /> : <Navigate to="/login" />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
          <Route path="/account" element={token ? <Navigate to="/" /> : <Register />} />
          <Route path="/agents/listing" element={token ? <AgentsListing /> : <Navigate to="/login" />}/>
          <Route path="/category/:category" element={token ? <Category /> : <Navigate to="/login" />}/>
          <Route path="/property/:property" element={token ? <Property /> : <Navigate to="/login" />}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
