import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const user = {
    email: "admin@gmail.com",
    password: "123456",
    role: "Admin",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === user.email && password === user.password && role === user.role) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userRole", role);

      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không chính xác!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{padding:"5px"}}
        />

        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{padding:"5px"}}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)} required style={{padding:"5px"}}>
          <option value="">-- Chọn quyền --</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>

        <button type="submit">Đăng nhập</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}