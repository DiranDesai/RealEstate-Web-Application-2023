import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// PAGES IMPORTS
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import Property from "./pages/Property";
import CreateEstate from "./pages/CreateEstate";
import Favourites from "./components/Favourites";
import Agents from "./pages/Agents";

// COMPONENTS IMPORTS
import "./App.css";
import Navbar from "./components/Navbar";
import MessageComponent from "./components/MessageComponent";

import authContext from "./context/authContext/authContext";
import useUser from "./hooks/useUser";
import Loader from "./components/Loader";
import useNotify from "./hooks/useNotify";
import OtherProfile from "./pages/OtherProfile";
import useAuthState from "./hooks/useAuthState";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const { token } = useContext(authContext);
  const {profileData} = useUser();

  useEffect(() => {
    console.log("CHANGED...");
  }, [window.location]);

  return (
    <>
      <Router>
        <ScrollToTop />
        {token && profileData && <Navbar />}
        <div className="app-wrapper">
          <Routes>
            <Route
              path="/"
              element={token ? <Home /> : <Navigate to="/login" />}
              exact
            />
            <Route
              path="/search"
              element={token ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={token ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/:userId"
              element={token ? <OtherProfile /> : <Navigate to="/login" />}
            />
            <Route path="/create" element={token ? <CreateEstate /> : <Navigate to="/login" />} />
            <Route
              path="/login"
              element={token ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/account"
              element={token ? <Navigate to="/" /> : <Register />}
            />
            <Route path="/agents" element={<Agents />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
        {token && profileData && <Footer />}
      </Router>
    </>
  );
}

export default App;
