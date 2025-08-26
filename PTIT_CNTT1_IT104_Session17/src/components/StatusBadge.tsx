import "./App.css"
type Props = { status: "active" | "inactive" };

export default function StatusBadge({ status }: Props) {
  return (
    <span className={`status-badge ${status === "active" ? "status-active" : "status-inactive"}`}>
      {status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}
    </span>
  );
}