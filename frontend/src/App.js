import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
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
import Favourites from "./components/Favourites";

// COMPONENTS IMPORTS
import "./App.css";
import Navbar from "./components/Navbar";
import MessageComponent from "./components/MessageComponent";

import authContext from "./context/authContext/authContext";
import useUser from "./hooks/useUser";
import Loader from "./components/Loader";
import useNotify from "./hooks/useNotify";

function App() {
  const { token } = useContext(authContext);

  useEffect(() => {
    console.log("CHANGED...");
  }, [window.location]);

  return (
    <>
      <HashRouter>
        {token && <Navbar />}
        <div className="app-wrapper">
        <Routes>
          <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} exact />
          <Route path="/search" element={token ? <Home /> : <Navigate to="/login" />} />
          <Route path="#/profile" element={<Profile />} />
          <Route path="/create" element={<CreateEstate />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
          <Route path="/account" element={token ? <Navigate to="/" /> : <Register />} />
          <Route path="/agents/listing" element={<AgentsListing />}/>
          <Route path="/category/:category" element={<Category />}/>
          <Route path="/property/:id" element={<Property />}/>
          <Route path="/favourites" element={ <Favourites /> }/>
        </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
