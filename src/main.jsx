import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './compon/index.css'
import App from './compon/landing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
