import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>Chi tiết User</h1>
      <p>User Name: {name}</p>
    </div>
  );
}