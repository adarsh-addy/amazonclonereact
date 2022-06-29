import React,{ useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contentobj from "./components/Contentobj";
import Bestseller from "./components/navcomp/Bestseller";
import Mobile from "./components/navcomp/Mobile";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  let name="Adarsh";
  let [inputState, setInputState]=useState('');//for search

  const [cart,setCart]=useState([]);

 // we are making this state here so that we can use it on any of the other child component

  // function add to cart
  // step :2 => making logic for add to cart 
  function addToCart(product) {
    console.log("clicked on cart",product);
   
    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele) => ele.id === product.id);
    console.log(productinCart,"value of productincart")
    // for empty cart array this find method will not work.

    if (productinCart) {
      if (productinCart.quantity < productinCart.totalquantity) {
        
        // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
        setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))
      }
    }
    else {
      // spread opertor
      
      // [...cart]
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  function deleteToCart(product){
    const productinCarttoDelete = cart.find((ele)=> ele.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setCart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }else{
      setCart(cart.map((ele)=> ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: ele ))
    }
  }

  function removeCart(product) {
    setCart(cart.filter(ele=>ele.id!==product.id))
  }

  return (
    <>
    <BrowserRouter>
    <Header setInputState={{setInputState,cart}}/>
    <Subheader/>
    <Routes>
      <Route path="/" element={<Home inputState={{inputState,addToCart}}/>}/>
      <Route path="/card" element={<Contentobj  inputState={{inputState,addToCart}}/>}/>
      <Route path="/cartpage" element={<Cart cart={{cart,addToCart,deleteToCart,removeCart}}/>}/>
      <Route path="/bestseller" element={<Bestseller addToCart={addToCart}/>}/>
      <Route path="/mobile" element={<Mobile addToCart={addToCart}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>


    </Routes>
    <Footer title={name}/>
    </BrowserRouter>
    </>
  );
}

export default App;
