import React from 'react';
import "./Button.css";
/**
* @author
* @function Btn
**/

const Btn = (props) => {
  return(
    <div onClick={props.clicked} className="btnClass btn1">
        {props.children}
    </div>
   )

 }

export default Btn