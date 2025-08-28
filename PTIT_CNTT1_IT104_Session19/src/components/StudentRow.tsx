import StatusBadge from "./StatusBadge";
import "./App.css"
type Props = {
  index: number;
  student: {
    code: string;
    name: string;
    dob: string;
    email: string;
    status: "active" | "inactive";
  };
};

export default function StudentRow({ index, student }: Props) {
  return (
    <tr>
      <td>{index}</td>
      <td>{student.code}</td>
      <td>{student.name}</td>
      <td>{student.dob}</td>
      <td>{student.email}</td>
      <td><StatusBadge status={student.status} /></td>
      <td>
        <button className="action-btn btn-block">Chặn</button>
        <button className="action-btn btn-edit">Sửa</button>
        <button className="action-btn btn-delete">Xóa</button>
      </td>
    </tr>
  );
}