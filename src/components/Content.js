import React from "react";
import "../style/content.css";
import Object from "../Object";
//console.log(Object);
function Content({ info }) {
  console.log(info);
  console.log(Object);
  let filteredData = Object.filter(ele =>
    ele.type.includes(info.inputState.toLowerCase())
  );
  return (
    <>
      {filteredData.length === 0
        ? Object.map((ele) => {
            return (
              <div className="content">
                <div className="card">
                  <div className="card-image">
                    <img src={ele.productpic} alt="" />
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
            );
          })
        : filteredData.map((ele) => {
            return (
              <div className="content">
                <div className="card">
                  <div className="card-image">
                    <img src={ele.productpic} alt="" />
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
            );
          })}
    </>
  );
}

export default Content;
