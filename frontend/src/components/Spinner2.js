import React from "react";

function Spinner2() {

  const spinnerStyles = {
    borderRadius: "50px"
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status" style={spinnerStyles}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}



export default Spinner2;
