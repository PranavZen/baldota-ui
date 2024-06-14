import React from "react";
import "../innerbanner/innerbanner.css";
function InnerBanner({ bgImg, mainText, subText }) {
  return (
    <section id="banner" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="overlayTextWrap">
        <h1 className="sectionTitle">
          {mainText} <span className="highlightText">{subText}</span>
        </h1>
      </div>
    </section>
  );
}

export default InnerBanner;
