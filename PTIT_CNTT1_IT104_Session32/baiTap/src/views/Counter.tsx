import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const result = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({
      type: "increase",
    });
  };
  const handleDecrease = () => {
    dispatch({
      type: "decrease",
    });
  };
  return (
    <div>
      <h2>Count: {result}</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
