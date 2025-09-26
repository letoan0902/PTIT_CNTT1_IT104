import { Modal } from "antd";

interface ModalDeleteProps {
  open: boolean;
  onClose: () => void;
  handleDelete: () => void;
}

export default function ModalDelete({
  open,
  onClose,
  handleDelete,
}: ModalDeleteProps) {
  return (
    <Modal
      title="Xác nhận xoá"
      open={open}
      onCancel={onClose}
      onOk={handleDelete}
      okText="Xác nhận"
      cancelText="Huỷ"
    >
      <p>Bạn có chắc chắn muốn xoá công việc này không?</p>
    </Modal>
  );
}
