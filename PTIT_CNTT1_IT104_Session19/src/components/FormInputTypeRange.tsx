import { useState } from "react";
import  "./App.css"
export default function ProgressForm() {
  const [progress, setProgress] = useState(0);
  const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedProgress(progress);
    console.log({ progress });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>
        Tiến độ hoàn thành: {submittedProgress !== null ? `${submittedProgress} %` : ""}
      </h3>

      <form onSubmit={handleSubmit}>
        <label>
          Tiến độ hoàn thành: %
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            style={{ margin: "0 8px" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}