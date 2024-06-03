import React from "react";

function SpanBox({spanText, bgColor, color}) {
  return (
    <div className="dealBox" style={{backgroundColor : bgColor}}>
      <span style={{color : color}}>{spanText}</span>
    </div>
  );
}

export default SpanBox;
