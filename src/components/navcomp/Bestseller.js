import React from 'react'
import Object from "../../Object"
import Bestsellercomp from './Bestsellercomp'

export default function Bestseller({addToCart}) {
  let bestSellerData=Object.filter((ele)=>ele.type==="shoes");
  return (
   <>
   <Bestsellercomp info={{bestSellerData,addToCart}} />
   </>
  )
}
