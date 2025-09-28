import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useAppDispatch } from "../hook/useCustomerRedux";
import { openModalAdd } from "../slices/modalAddManager";

export default function ButtonAddBook() {
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(openModalAdd());
  };
  return (
    <Button
      type="primary"
      size="large"
      icon={<PlusOutlined />}
      style={{ marginBottom: 24 }}
      onClick={openModal}
    >
      ADD BOOK
    </Button>
  );
}
