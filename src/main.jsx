import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import UserContextProvider from './userContext/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import Provider from './userContext/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
)
