import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ HelmetProvider envuelve TODO — va aquí, una sola vez */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
