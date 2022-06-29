import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";

export default function Header({setInputState}) {

    function manageInput(e){
        let {value}=e.target
        console.log(value);
        setInputState.setInputState(value);
    }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          
          <img src="/images/logo.jpg" alt="" />
        </Link>
      </div>
      <div className="content2">
        <div className="address">
          <i className="fa fa-location-arrow" style={{ color: "white" }}></i>
        </div>

        <div className="info">
          <p style={{ fontsize: "small", color: "white" }}>Deliver to</p>

          <p style={{ fontsize: "medium", color: "white" }}>Address</p>
        </div>
      </div>

      <div className="searchbar">
        <div className="search">
          <input type="text" placeholder="Search" onChange={manageInput}/>
        </div>
        <div className="icon">
          <i className="fa fa-search"></i>
        </div>
      </div>

      <div className="flag">
        <img src="/images/flag1.png" alt="" className="icon1" />
      </div>

      <div className="amazon-cart">
        <div className="cart-boxing">{setInputState.cart.length}</div>
        <i className="fa fa-shopping-cart" style={{ fontSize: "30px" }}></i>
      <Link to='/cartpage'> <button className="cart-btn">Cart</button></Link> 
      </div>

      <div className="amazon-login">
        <Link to="/login">
          <button className="amazon-btn">Login</button>
        </Link>
      </div>

      <div className="amazon-login">
        <Link to="/signup">
          <button className="amazon-btn">SignUp</button>
        </Link>
      </div>

      <div className="amazon-return">
        <div className="info">
          <p style={{ fontsize: "small", color: "white" }}>Returns</p>

          <p style={{ fontsize: "medium", color: "white", fontWeight: "bold" }}>
            & Orders
          </p>
        </div>
      </div>
    </div>
  );
}
