import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-6n7v64ilef2u153e.us.auth0.com"
    clientId="TYjM6kuV8sePoi6Kwae2clhxTwxwJcqQ"
    authorizationParams={{
      redirect_uri: "https://videocall-kappa.vercel.app"    }}
  >
  <App />
  </Auth0Provider>,
);

// reportWebVitals();
