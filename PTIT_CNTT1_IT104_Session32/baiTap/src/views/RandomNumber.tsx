import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RandomNumber() {
  const result = useSelector((state) => state.random);
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({
      type: "random",
      payload: Math.ceil(Math.random() * 100),
    });
  };
  console.log(result);

  return (
    <div>
      <h2>[{Array.isArray(result) ? result.join(", ") : ""}]</h2>
      <button onClick={handleRandom}>Generate Random Number</button>
    </div>
  );
}
