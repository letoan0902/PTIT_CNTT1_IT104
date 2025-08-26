import { useState } from "react";
import "./App.css"
export default function ColorForm() {
  const [color, setColor] = useState("#000000"); 
  const [submittedColor, setSubmittedColor] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedColor(color);
    console.log({ color }); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>
        Color: {submittedColor ? submittedColor : ""}
      </h3>

      <form onSubmit={handleSubmit}>
        <label>
          Màu sắc
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ margin: "0 8px" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {submittedColor && (
        <div
          style={{
            marginTop: "15px",
            width: "100px",
            height: "30px",
            backgroundColor: submittedColor,
            border: "1px solid #ccc",
          }}
        ></div>
      )}
    </div>
  );
}