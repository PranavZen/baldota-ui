import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../../redux/actions";

function QuantityBtn() {
  const count = useSelector((state) => state.qtReducers.count);
  const dispatch = useDispatch();
  return (
    <div className="qtBox">
      <button onClick={() => dispatch(decrementCount())}>
        <span>-</span>
      </button>
      <span className="qtCountBox">{count}</span>
      <button onClick={() => dispatch(incrementCount())}>
        <span>+</span>
      </button>
    </div>
  );
}

export default QuantityBtn;
