import { Button, Form, Input, notification, type FormProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  const account: FieldType[] = useSelector((state) => state.account.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  // Lấy email và password từ location.state nếu có
  const initialEmail = location.state?.email || "";
  const initialPassword = location.state?.password || "";

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const found = account.find(
      (acc) => acc.email === values.email && acc.password === values.password
    );
    if (found) {
      notification.success({ message: "Thông tin đăng nhập đúng" });
      dispatch({
        type: "login",
        payload: {
          email: values.email,
          password: values.password,
        },
      });
      navigate("/home-pages");
    } else {
      notification.error({ message: "Thông tin đăng nhập sai" });
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Login</h2>
      <Form
        name="basic"
        style={{ maxWidth: 300, width: "100%" }}
        initialValues={{
          email: initialEmail,
          password: initialPassword,
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
