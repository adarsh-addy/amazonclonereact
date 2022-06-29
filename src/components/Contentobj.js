import React from "react";
import Content from "./Content";
//import Object from '../Object'

export default function Contentobj({ inputState }) {
  // const contentArr= Object.map(ele=>{
  //     console.log(ele);
  //     return(
  //         <>
  //<Content info={ele} key={ele.id}/>
  //           </>
  //           )})
  // return (
  //   <div>
  //       {contentArr}
  //   </div>
  // )
  //}

  return(
  <>
  <Content info={inputState} key={inputState} />
  </>
  )
}
