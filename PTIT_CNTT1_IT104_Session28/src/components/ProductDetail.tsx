import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Chi tiết User</h1>
      <p>User ID: {id}</p>
    </div>
  );
}