import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import "./App.css";
import Navbar from "./components/Navbar";
import PropertyList from "./components/PropertyList";

import authContext from "./context/authContext/authContext";

function App() {
  const { user } = useContext(authContext);
  console.log(user);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} exact />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/account" element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
