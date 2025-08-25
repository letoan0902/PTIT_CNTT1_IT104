import "./App.css";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <select>
        <option value="">Sắp xếp theo tuổi</option>
        <option value="active">Đang hoạt động</option>
        <option value="inactive">Ngưng hoạt động</option>
      </select>

      <input type="text" placeholder="Tìm kiếm theo tên hoặc email" />

      
    </div>
  );
}