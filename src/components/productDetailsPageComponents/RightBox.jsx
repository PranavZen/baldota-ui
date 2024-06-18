import React from "react";
import SquareBtn from "../cta/SquareBtn";
import QuantityBtn from "./QuantityBtn";

function RightBox({ name, description, longDesc }) {
  return (
    <div className="rightBox">
      <h4>{name}</h4>
      <p>{description}</p>
      <QuantityBtn />
      <div className="btnsWrap">
        <SquareBtn
          sBtnName="Send Inquiry"
          btnBgColor="#007078"
          color="#fff"
          className="d-none"
        />
        <SquareBtn
          sBtnName="Add to Inquiry List"
          btnBgColor="#007078"
          color="#fff"
          className="d-none"
        />
      </div>
      <div className="descriptionBox">
        <h4>Description :</h4>
        <p>{longDesc}</p>
      </div>
    </div>
  );
}

export default RightBox;
