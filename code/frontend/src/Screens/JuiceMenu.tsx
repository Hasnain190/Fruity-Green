import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./juice-menu.css";
import image from "../assets/juice-glass.png";
import Buy from "../components/Buy";

import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";


export default function JuiceMenu({   }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const navigate = useNavigate()
  type id = number;
 
  
  const {id } = useParams()
  const { error, loading, products, page, pages } = productList;
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  
  
  const addToCartHandler = () => {

navigate(`/cart/${id}?qty=${qty}` )
}
  return (
    <div className="menu-screen">
      <h2 className="menu-headline">Explore our Mouth-Dripping Juice Menu</h2>

      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="menu-container">
          {products.map((product) => (
            <div key={product._id} className="menu-item-long-card-container">
              <div className="menu-item-long-card">
                <div className="menu-item-image-container">
                  <img src={product.image} alt="menu-item-image" />
                </div>
                <div className="menu-item-about-contianer">
                  <h2 className="menu-item-about-title">{product.name}</h2>
                  <div className="menu-item-about-desc">
                    <ul className="menu-item-about-desc-list">
                      <li>{product.description}</li>
                    </ul>
                  </div>
                  <h2 className="menu-item-about-title">$ {product.price}</h2>
                  <button
                    onClick={addToCartHandler}
                    className="buy"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
