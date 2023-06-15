import React, {useState, useEffect} from "react";

function useWindow() {
  const [windowStatus, setWindowStatus] = useState(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1000) {
      setWindowStatus(true);
    } else {
      setWindowStatus(false);
    }
  }, []);

  return windowStatus
}

export default useWindow;
