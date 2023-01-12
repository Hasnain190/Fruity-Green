import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Screens/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import JuiceMenu from "./Screens/JuiceMenu";
import Cart from "./Screens/Cart";
import Checkout from "./Screens/Checkout";
import Account from "./Screens/Account";
import SmoothiesMenu from "./Screens/SmoothiesMenu";
import AcaiMenu from "./Screens/AcaiMenu";

import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
  <Provider store={store} >
  
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juice-menu" element={<JuiceMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/smoothies-menu" element={<SmoothiesMenu />} />
        <Route path="/acai-menu" element={<AcaiMenu />} />
      </Routes>
      <Footer></Footer>
    </Router>
  </Provider>
  </React.StrictMode>
);



