import { useDispatch, useSelector } from "react-redux";
import {
  incrementByNumber,
  reset,
  restar,
  sumar,
} from "../features/counterSlice";
import { useState } from "react";

export const Counter = () => {
  const [numberInc, setNumberInc] = useState(0);
  const addValue = Number(numberInc) || 0;

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const resetNumber = () => {
    setNumberInc(0);
    dispatch(reset());
  };

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(sumar())}>+</button>
        <button onClick={() => dispatch(restar())}>-</button>
        <input
          type="number"
          value={numberInc}
          onChange={(e) => setNumberInc(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByNumber(addValue))}>
          Add
        </button>
        <button onClick={resetNumber}>Reset</button>
      </div>
    </>
  );
};
