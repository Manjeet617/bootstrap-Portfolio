import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css';

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';// ✅ correct Bootstrap import
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
