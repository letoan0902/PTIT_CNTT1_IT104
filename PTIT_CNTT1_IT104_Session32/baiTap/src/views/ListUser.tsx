import { useSelector } from "react-redux";

type UserType = {
  id: number;
  name: string;
  gender: "Nam" | "Nữ";
  dob: string;
  address: string;
};

export default function ListUser() {
  const users: UserType[] = useSelector((state: any) => state.profile || []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Danh sách người dùng</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Họ và tên</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Giới tính</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Ngày sinh</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Địa chỉ</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: 16 }}>
                Không có người dùng
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td style={{ border: "1px solid #eee", padding: 8 }}>{u.id}</td>
                <td style={{ border: "1px solid #eee", padding: 8 }}>
                  {u.name}
                </td>
                <td style={{ border: "1px solid #eee", padding: 8 }}>
                  {u.gender}
                </td>
                <td style={{ border: "1px solid #eee", padding: 8 }}>
                  {u.dob}
                </td>
                <td style={{ border: "1px solid #eee", padding: 8 }}>
                  {u.address}
                </td>
                <td style={{ border: "1px solid #eee", padding: 8 }}>
                  <td>
                    <button>Sửa</button>
                  </td>
                  <td>
                    <button>Xoá</button>
                  </td>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
