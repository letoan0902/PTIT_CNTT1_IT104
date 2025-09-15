import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const isAuth = localStorage.getItem("isAuth") === "true";

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}