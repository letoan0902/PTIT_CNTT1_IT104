

type User = {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
};

const users: User[] = [
  { id: 1, name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New york" },
  { id: 2, name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
];
const ActionButtons = () => (
  <div className="action-buttons">
    <button className="btn-edit">Sửa</button>
    <button className="btn-delete">Xóa</button>
  </div>
);
const TableRow = ({ user, index }: { user: User; index: number }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{user.name}</td>
    <td>{user.dob}</td>
    <td>{user.gender}</td>
    <td>{user.address}</td>
    <td>
      <ActionButtons />
    </td>
  </tr>
);
const TableHeader = () => (
  <thead>
    <tr>
      <th>STT</th>
      <th>Họ và tên</th>
      <th>Ngày sinh</th>
      <th>Giới tính</th>
      <th>Địa chỉ</th>
      <th>Hành động</th>
    </tr>
  </thead>
);

export default function UserTable() {
  return (
    <div className="table-container">
      <table>
        <TableHeader />
        <tbody>
          {users.map((user, index) => (
            <TableRow key={user.id} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}