import React from "react";
import useUser from "../hooks/useUser";

function Loader() {
  return (
    <div className={`loader-wrapper.loader-on`}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
