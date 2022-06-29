import React from 'react'
import '../style/subheader.css'
import Navbar from './Navbar'
// import {  Route,Routes } from 'react-router-dom';
// import Bestseller from './navcomp/Bestseller'
// import Mobile from './navcomp/Mobile'

export default function Subheader() {
  return (
    <div className="subheader">
         {/* <Routes>
     <Route exact path="/" component={<Subheader/>} />
            <Route  path="/bestseller" element={<Bestseller/>} />
            <Route path="/mobile" element={<Mobile/>} />
        </Routes> */}
     <Navbar/>
    </div>
  )
}
