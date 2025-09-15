import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Student = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const studentNameFromUrl = searchParams.get("studentName") || "";
  const [inputValue, setInputValue] = useState(studentNameFromUrl);

  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/student?studentName=${inputValue}`);
    }
  };

  return (
    <div className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default Student;