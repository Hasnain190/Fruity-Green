import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Navbar from './components/Navbar'
import Home from './Home'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  </React.StrictMode>,
)
