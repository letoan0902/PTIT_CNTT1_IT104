import { Link, Outlet } from "react-router-dom";

export default function Teams() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Teams</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="">Danh sách team</Link> |{" "}
        <Link to="1">Team 1</Link> |{" "}
        <Link to="2">Team 2</Link> |{" "}
        <Link to="3">Team 3</Link>
      </nav>
      <Outlet />
    </div>
  );
}