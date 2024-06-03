import React from "react";
import SpanBox from "../spanbox/SpanBox";
import RoundBtn from "../cta/RoundBtn";
function Grid() {
  return (
    <div className="parent">
      <div className="div1 gridBox">
        <div className="wrap pose1">
          <div>
            <SpanBox spanText="Fittings" bgColor="#FFA700" color="#000"/>
            <h4>Discount 50% on all Fittings</h4>
            <p className="commonPara">
              Threads with smooth surface finish avoid galling and help to
              extend the fitting service life.
            </p>
          </div>
          <RoundBtn
            rBtnLink="#"
            rBtnName="Shop Fittings"
            color="#fff"
            fill="#fff"
          />
        </div>
      </div>
      <div className="div2 gridBox">
        <div className="wrap pose1">
          <div>
            <SpanBox spanText="Valves" bgColor="#FFA700" color="#000"/>
            <h4>Get 10% Off on Valves</h4>
            <p className="commonPara">Threads with smooth surface.</p>
          </div>
          <RoundBtn
            rBtnLink="#"
            rBtnName="Shop Valves"
            color="#fff"
            fill="#fff"
          />
        </div>
      </div>
      <div className="div3 gridBox">
        <div className="wrap pose1 pose3">
          <div>
            <SpanBox spanText="Manifolds" bgColor="#FFA700" color="#000"/>
            <h4>Get 10% Off on Manifolds</h4>
            <p className="commonPara">Threads with smooth surface.</p>
          </div>
          <RoundBtn
            rBtnLink="#"
            rBtnName="Shop Manifolds"
            color="#fff"
            fill="#fff"
          />
        </div>
      </div>
    </div>
  );
}

export default Grid;
