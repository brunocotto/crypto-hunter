import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import CryptoContext from './cryptoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>
)
