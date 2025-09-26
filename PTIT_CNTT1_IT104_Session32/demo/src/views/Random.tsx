import { useDispatch, useSelector } from "react-redux";

export default function Random() {
  const result = useSelector((state) => state.random);
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({
      type: "random",
      payload: Math.ceil(Math.random() * 1000),
    });
  };
  return (
    <div>
      <h2>Random number: {result}</h2>
      <button onClick={handleRandom}>Random </button>
    </div>
  );
}
