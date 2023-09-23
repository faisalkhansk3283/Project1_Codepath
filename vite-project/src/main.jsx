import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" alt={name} />

    <App />
  </React.StrictMode>,
)
