import './App.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import CryptoContext from './cryptoContext'
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>
)
