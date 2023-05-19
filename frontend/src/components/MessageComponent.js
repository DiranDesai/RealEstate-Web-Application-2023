import React, { useEffect, useRef } from "react";
import useNotify from "../hooks/useNotify";

function MessageComponent() {
  const { dispatch, payloadData, error } = useNotify();

  const {message, success} = payloadData;

  const handleError = () => {
    dispatch({ type: false });
  }

  return (
    <>
      <div
        class={`modal msgContainer`}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
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
