import { useDispatch, useSelector } from "react-redux";

export default function ChangeState() {
  const result = useSelector((state) => state.changeState);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({
      type: "changeState",
    });
  };
  return (
    <div>
      <h2>{result}</h2>
      <button onClick={handleChange}>Change State</button>
    </div>
  );
}
