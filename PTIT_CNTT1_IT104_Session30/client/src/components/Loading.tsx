import { ClockLoader } from "react-spinners";
interface LoadingProps {
  isLoading: boolean;
}
function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
      }}
    >
      <ClockLoader color="#000000" size={80} loading={isLoading} />
    </div>
  );
}

export default Loading;
