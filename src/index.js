import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.scss'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-luotntol.us.auth0.com"
      clientId="Zrm75a4eXhFegGyPku5337zrnYEyeDc1"
      redirectUri={window.location.origin}
      audience="https://dev-luotntol.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
      // audience={process.env.REACT_APP_baseUrl}
      // scope="read:get_stats"
    > */}
    <Auth0Provider
      domain="dev---utwscq.us.auth0.com"
      clientId="DpGvdcZFYxn33xajjb4gtliuG0yS6wSK"
      redirectUri={window.location.origin}
      // audience="dev---utwscq.us.auth0.com/api/v2/"
      // scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
