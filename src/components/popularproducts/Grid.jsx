import React from "react";
import SpanBox from "../spanbox/SpanBox";
import RoundBtn from "../cta/RoundBtn";
import slugify from "slugify";
import popularData from "./popularData";

function Grid() {
  return (
    <div className="parent">
      {popularData.map((item, index) => {
        const singleItem = item.url
          ? slugify(item.url.replace("#", ""), { lower: true })
          : "";
        return (
          <div className={`div${item.id} gridBox`} key={index}>
            <div className={`wrap pose1 pose${item.id}`}>
              <div>
                <SpanBox
                  spanText={item.tagName}
                  bgColor="#FFA700"
                  color="#000"
                />
                <h4>{item.title}</h4>
                <p className="commonPara">{item.description}</p>
              </div>
              <RoundBtn 
                rBtnLink={`/categories/${singleItem}`}
                rBtnName={`Shop ${item.tagName}`}
                color="#fff"
                fill="#fff"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
