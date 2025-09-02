import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    console.log("Component đã được render lần đầu!");
  }, []); 

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>
        Chào mừng bạn đến với ứng dụng của chúng tôi!
      </h2>
    </div>
  );
};

export default Welcome;