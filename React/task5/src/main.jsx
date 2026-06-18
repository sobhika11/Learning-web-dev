import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import App from './App.jsx'
import PropTypes from 'prop-types';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Link to="/" >Home</Link>
    <Link to = "/about">About</Link>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={< PropTypes/>} />
    </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
