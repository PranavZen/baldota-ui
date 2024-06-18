import React from "react";

function LeftBox({ productImg, altName }) {
  return (
    <div className="leftBox">
      <img src={productImg} alt={altName} className="img-fluid" width={500} height={400}/>
    </div>
  );
}

export default LeftBox;
