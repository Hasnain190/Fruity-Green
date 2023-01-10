import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Navbar from './components/Navbar'
import Home from './Screens/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer'
import JuiceMenu from './Screens/JuiceMenu'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/juice-menu" element = {<JuiceMenu/>}/>

      </Routes>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
)
