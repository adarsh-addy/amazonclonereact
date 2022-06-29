import React from 'react'
 import { Link } from 'react-router-dom'
import '../style/navbar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
           <Link to="/" className="nav-1"><div>Home</div> </Link>
      <Link to="/bestseller" className="nav-1"><div>Best Sellers</div> </Link>
      <Link to="/mobile" className="nav-1">Mobiles </Link>
      <Link to="#" className="nav-1">Customer Service</Link>
      <Link to="#" className="nav-1">Today's Deals</Link>
      <Link to="#" className="nav-1">Fashion</Link>
      <Link to="#" className="nav-1">Electronics</Link>
      <Link to="#" className="nav-1">Prime</Link>
      <Link to="#" className="nav-1">Home&Kitchen</Link>
      <Link to="#" className="nav-1">Amazon Pay</Link>
      <Link to="#" className="nav-1">New Releases</Link>
      <Link to="#" className="nav-1">Computers</Link>
    </div>
  )
}
