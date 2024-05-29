import React from "react";
import { Link } from "react-router-dom";
import "../cta/cta.css";
function RoundBtn({ rBtnLink, rBtnName, color, fill }) {
  return (
    <Link to={rBtnLink} className="linkBtn" style={{ color: color }}>
      {rBtnName}
      <span className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
        >
          <path
            d="M0.792893 9.29289C0.402369 9.68342 0.402369 10.3166 0.792893 10.7071C1.18342 11.0976 1.81658 11.0976 2.20711 10.7071L0.792893 9.29289ZM11.5 1C11.5 0.447715 11.0523 -9.62973e-08 10.5 -9.62973e-08H1.5C0.947716 -9.62973e-08 0.5 0.447715 0.5 1C0.5 1.55228 0.947716 2 1.5 2H9.5V10C9.5 10.5523 9.94772 11 10.5 11C11.0523 11 11.5 10.5523 11.5 10V1ZM2.20711 10.7071L11.2071 1.70711L9.79289 0.292893L0.792893 9.29289L2.20711 10.7071Z"
             fill={fill}
          />
        </svg>
      </span>
      <span className="arrow transArrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
        >
          <path
            d="M0.792893 9.29289C0.402369 9.68342 0.402369 10.3166 0.792893 10.7071C1.18342 11.0976 1.81658 11.0976 2.20711 10.7071L0.792893 9.29289ZM11.5 1C11.5 0.447715 11.0523 -9.62973e-08 10.5 -9.62973e-08H1.5C0.947716 -9.62973e-08 0.5 0.447715 0.5 1C0.5 1.55228 0.947716 2 1.5 2H9.5V10C9.5 10.5523 9.94772 11 10.5 11C11.0523 11 11.5 10.5523 11.5 10V1ZM2.20711 10.7071L11.2071 1.70711L9.79289 0.292893L0.792893 9.29289L2.20711 10.7071Z"
             fill={fill}
          />
        </svg>
      </span>
    </Link>
  );
}

export default RoundBtn;
