import React from 'react'
import "../../style/content.css"
export default function Bestsellercomp({info}) {
  console.log(info);
  return (
    <>
   
      {
       // (info.bestSellerData || []).map((ele)=>{
        info.bestSellerData.map((ele)=>{
          return(
            <div className="content"key={ele.id}>
          <div className="card">
          <div className="card-image">
            <img src={`${ele.productpic}`} alt="" />
          </div>
          <div className="para1">
            {/* <p>{info.id}</p> */}
  
            <p>
              <strong>{ele.brand}</strong>
            </p>
            <hr />
            <p className="para-name">
              <strong>
                <i>{ele.name}</i>
              </strong>
            </p>
            <p className="para-price">
              <strong>Price : Rs {ele.price}</strong>
            </p>
            <p className="para-rating">rating :⭐⭐⭐⭐</p>
            <button className="content-btn" onClick={()=>info.addToCart(ele)}>Add To Cart</button>
          </div>
        </div>
        </div>
        )
        
        })
      
}
    
  </>
  )
}
