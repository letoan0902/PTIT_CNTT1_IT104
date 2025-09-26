import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const result = useSelector((state) => state.counter); // Lấy dữ liệu bên trong store
  const dispatch = useDispatch(); // Dùng để bắn action từ view vào reducer

  const handleIncrease = () => {
    // Bắn action
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
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
