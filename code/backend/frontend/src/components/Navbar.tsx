import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/Fruity-Greens4.jpg";
import { Link } from "react-router-dom";
export default function Navbar() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <img src={logo} alt="fruitygreen" />
          Fruity Greens
        </Link>
        <div
          className="navbar-menu"
          // onClick={() => setIsOpen(!isOpen)}
        >
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/juice-menu">JUICES</Link>
            </li>
            <li>
              <Link to="/smoothies-menu">SMOOTHIES</Link>
            </li>
            <li>
              <Link to="/acai-menu">ACAI BOWLS</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa fa-cart-plus"aria-hidden="false" ></i>
              </Link>
            </li>
            <li>
              <Link to="/account">
              <i className="fa fa-user" aria-hidden="false"></i>

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
