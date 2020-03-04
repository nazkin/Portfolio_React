import React from 'react';
import './Backdrop.css';

/**
* @author
* @function backDrop
**/

const backDrop = (props) => {
  return(
    <div onClick={props.close}
         className="backdrop" />
   )

 }

export default backDrop;