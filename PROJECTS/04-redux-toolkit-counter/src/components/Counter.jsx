import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div id="counterLabel">{count}</div>
      <div className="buttons">
        <button
          id="increase"
          className="button"
          onClick={() => dispatch(increment())}
        >
          Arttır
        </button>
        <button
          id="decrease"
          className="button"
          onClick={() => dispatch(decrement())}
        >
          Azalt
        </button>
        <button id="reset" className="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
