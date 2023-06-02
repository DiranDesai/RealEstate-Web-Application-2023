import React, { useEffect, useRef } from "react";
import useNotify from "../hooks/useNotify";

function MessageComponent({success, message, setError}) {
  useEffect(() => {
    const interval = setTimeout(() => {
      setError(false);
    }, 2000);

    return () => clearInterval(interval)
  }, []);

  const handleError = () => {
    setError(false);
  }

  

  return (
    <>
      <div
        class={`modal msgContainer`}
        id="exampleModal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div class={`alert ${success ? "alert-success" : "alert-danger"}`} role="alert">
                {message}
              </div>
            <div className="error-icon">
              <i class={`bi  ${success ? "text-success bi-check-circle" : "text-danger bi-slash-circle"}`}></i>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal" onClick={handleError}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageComponent;
