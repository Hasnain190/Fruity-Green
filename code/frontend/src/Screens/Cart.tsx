import React from "react";
import Buy from "../components/Buy";
import  './cart.css'                           
import juiceImage from '../assets/juice-glass.png'
export default function Cart() {
  return (
    <div className="cart-screen">
      <h2 className="cart-headline">Check Your Cart</h2>
      
      <div className="cart-price-container">
    
         
           
         
              <h2 className="cart-item-about-title">Grand Total</h2>
            
             <div className="cart-item-total"><strong>  $50</strong></div>
              <Buy Title={'Proceed to Checkout'} />
            </div>
         
      
      
  
      
      
      
      <div className="cart-container">
        <div className="cart-item-long-card-container">
          <div className="cart-item-long-card">
            <div className="cart-item-image-container">
              <img src={juiceImage} alt="cart-item-image" />
            </div>
            <div className="cart-item-about-contianer">
              <h2 className="cart-item-about-title">Fresh Strawberry Juice</h2>
             <div className="cart-item-price">Indiviual Price : <strong>$20</strong></div>X
             <div className="cart-item-quantity">Quantiy: <strong> <input type="number" /></strong></div> = 
             <div className="cart-item-total">Total:<strong>  $50</strong></div>
              <Buy Title={'Remove'} />
            </div>
          </div>
        </div>
     
        <div className="cart-item-long-card-container">
          <div className="cart-item-long-card">
            <div className="cart-item-image-container">
              <img src={juiceImage} alt="cart-item-image" />
            </div>
            <div className="cart-item-about-contianer">
              <h2 className="cart-item-about-title">Fresh Strawberry Juice</h2>
             <div className="cart-item-price">Indiviual Price : <strong>$20</strong></div>X
             <div className="cart-item-quantity">Quantiy: <strong> 2</strong></div> = 
             <div className="cart-item-total">Total:<strong>  $50</strong></div>
              <Buy Title={'Remove'} />
            </div>
          </div>
        </div>
     
        <div className="cart-item-long-card-container">
          <div className="cart-item-long-card">
            <div className="cart-item-image-container">
              <img src={juiceImage} alt="cart-item-image" />
            </div>
            <div className="cart-item-about-contianer">
              <h2 className="cart-item-about-title">Fresh Strawberry Juice</h2>
             <div className="cart-item-price">Indiviual Price : <strong>$20</strong></div>X
             <div className="cart-item-quantity">Quantiy: <strong> 2</strong></div> = 
             <div className="cart-item-total">Total:<strong>  $50</strong></div>
              <Buy Title={'Remove'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
