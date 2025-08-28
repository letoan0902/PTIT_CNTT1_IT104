import StudentRow from "./StudentRow";
import "./App.css"
type Student = {
  id: number;
  code: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
};

const students: Student[] = [
  { id: 1, code: "SV001", name: "Nguyễn Văn A", dob: "21/12/2022", email: "nva@gmail.com", status: "active" },
  { id: 2, code: "SV002", name: "Nguyễn Thị B", dob: "21/12/2022", email: "ntb@gmail.com", status: "inactive" },
];

export default function StudentTable() {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, index) => (
          <StudentRow key={s.id} student={s} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}