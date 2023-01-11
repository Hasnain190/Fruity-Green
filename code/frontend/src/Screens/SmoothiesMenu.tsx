import React from "react";
import "./juice-menu.css";
import  image from '../assets/juice-glass.png'
import Buy from "../components/Buy";



export default function SmoothiesMenu() {
  
  
  
  
  return (
  
  
  
  
  
    <div className="menu-screen">
      <h2 className="menu-headline">Explore our Smoothies Menu</h2>
      <div className="menu-container">
        <div className="menu-item-long-card-container">
          <div className="menu-item-long-card">
            <div className="menu-item-image-container">
              <img src={image} alt="menu-item-image" />
            </div>
            <div className="menu-item-about-contianer">
              <h2 className="menu-item-about-title">Fresh Strawberry Juice</h2>
              <div className="menu-item-about-desc">
                <ul className="menu-item-about-desc-list">
                  <li>Real fresh strawberry </li>
                  <li>Collected within 24 hours from californea garden</li>
                  <li>Contain 5 strawberry juices</li>
                  <li> Containe up to 6 x 5 calories</li>
                </ul>
              </div>
              <Buy Title={'Add to Cart'}></Buy>
            </div>
          </div>
        </div>
        
        
      
         
      </div>
    </div>
  );
}
