import { useState } from "react";
import "./App.css"
export default function BirthdayForm() {
  const [birthday, setBirthday] = useState("");
  const [submittedBirthday, setSubmittedBirthday] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedBirthday(birthday);
    console.log({ birthday }); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>
        Ngày sinh: {submittedBirthday ? submittedBirthday : ""}
      </h3>

      <form onSubmit={handleSubmit}>
        <label>
          Ngày sinh:
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            style={{ margin: "0 8px" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}