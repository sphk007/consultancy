// import React from 'react'
// import './Breadcrums.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

// const Breadcrums = (props) => {
//   const {product} = props;
//   return (
//     <div className="breadcrums">
//       HOME <img src={arrow_icon} alt="" /> PRODUCTS{" "}
//       <img src={arrow_icon} alt="" /> {product.name.toUpperCase()}
//     </div>
//   );
// }

// export default Breadcrums

import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="" /> PRODUCTS{" "}
      <img src={arrow_icon} alt="" /> {product.name.toUpperCase()}
    </div>
  );
};

export default Breadcrums;
