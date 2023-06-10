import React from "react";
import useUser from "../hooks/useUser";

function Loader() {
  return (
    <div className="loader-wrapper">
      <div class="spinner-border text-primary property-spinner loader-1" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
