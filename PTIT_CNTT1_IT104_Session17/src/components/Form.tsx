import { useState } from "react";
import "./App.css"
export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "0 8px" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}