// App.tsx
import { useSelector, useDispatch } from "react-redux";

export default function ChangeTheme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    dispatch({
      type: "changeTheme",
    });
  };
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: isDark ? "#000" : "#fff",
        color: isDark ? "#fff" : "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <label>
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
        {isDark ? "Tối" : "Sáng"}
      </label>

      <h1>Chế độ {isDark ? "Tối 🌙" : "Sáng ☀️"}</h1>
    </div>
  );
}
