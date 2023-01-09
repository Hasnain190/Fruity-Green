import React from 'react'
import './Navbar.css'
import logo from './assets/Fruity-Greens4.jpg'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
        
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
            <img src={logo} alt="fruitygreen"  />
            Fruity Greens
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">JUICES</Link></li>
          <li><Link to="/about">SMOOTHIES</Link></li>
          <li><Link to="/contact">ACAI BOWLS</Link></li>
        </ul>
      </div>
    </nav>
  )
}
