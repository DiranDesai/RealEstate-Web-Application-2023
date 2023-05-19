import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import AuthState from "./context/authContext/authState";
import UserState from "./context/userContext/userState";
import NotifyState from "./context/notifyContext/notifyState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthState>
    <NotifyState>
      <UserState>
        <App />
      </UserState>
    </NotifyState>
  </AuthState>
);
