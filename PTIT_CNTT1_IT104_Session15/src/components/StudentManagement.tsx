import Toolbar from "./ToolBar";
import StudentTable from "./StudentTable";
import Pagination from "./Pagination";
import "./App.css";

export default function StudentManagement() {
  return (
    <div style={{ padding: "20px" }}>
      <div className="student-header">
        <h2 className="title">Quản lý sinh viên</h2>
      
      <button className="add-button">Thêm mới sinh viên</button>
      </div>
      <Toolbar />

      <StudentTable />

      <Pagination totalPages={5} currentPage={1} />
    </div>
  );
}