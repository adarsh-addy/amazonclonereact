import React from 'react'
import Object from "../../Object"
import Mobilecomp from './Mobilecomp'

export default function Mobile({addToCart}) {
  let mobileData=Object.filter((ele)=>ele.type==="mobile");
  return (
   <>
   <Mobilecomp info={{mobileData,addToCart}} />
   </>
  )
}
