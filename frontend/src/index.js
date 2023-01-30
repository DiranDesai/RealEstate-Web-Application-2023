import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import AuthState from './context/authContext/authState';
import UserState from './context/userContext/userState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthState>
    <UserState>
      <App />
    </UserState>
  </AuthState>
);
