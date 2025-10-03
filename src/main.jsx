import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { CreationProvider } from './contexts/CreationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
            <CreationProvider>
                <App />
            </CreationProvider>
      </Router>
  </StrictMode>,
)
