import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccordian } from "../../redux/actions";
import { showAccordianState } from "../../redux/selectors";

function AccordionItem({ item, index }) {
  const dispatch = useDispatch();
  const openIndex = useSelector(showAccordianState);
  const isOpen = openIndex === index;
  const contentEl = useRef(null);
  const getContentHeight = () => {
    return isOpen ? `${contentEl.current.scrollHeight}px` : "0";
  };

  return (
    <div className={`commonAccordian ${isOpen ? "active" : ""}`} onClick={() => dispatch(toggleAccordian(index))}>
      <div className="accordianBtn">
        <h6 className="acc-title">{item.title}</h6>
        <span
          className="accordianArrow"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
          >
            <path
              d="M1.37793 18.1824L9.5972 9.92578L1.37793 1.6692"
              stroke="#4A3AFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div
        className="accordianContent"
        ref={contentEl}
        style={{
          height: getContentHeight(),
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div className="accordianText">
          <p>{item.data}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
