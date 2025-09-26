import { useSelector } from "react-redux";

type UserType = {
  id: number;
  name: string;
  gender: "Nam" | "Nữ";
  dob: string;
  address: string;
};

export default function Profile() {
  const users: UserType[] = useSelector((state: any) => state.profile);

  const firstUser = users && users.length > 0 ? users[0] : null;

  if (!firstUser) {
    return (
      <div style={{ textAlign: "start" }}>
        <h2>Thông tin cá nhân</h2>
        <div>Không có người dùng</div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "start" }}>
      <h2>Thông tin cá nhân</h2>
      <div>ID: {firstUser.id}</div>
      <div>Họ và tên: {firstUser.name}</div>
      <div>Giới tính: {firstUser.gender}</div>
      <div>Ngày sinh: {firstUser.dob}</div>
      <div>Địa chỉ: {firstUser.address}</div>
    </div>
  );
}
