import { Modal } from "antd";
import { WarningFilled } from "@ant-design/icons";
interface ModalBlockProps {
  open: boolean;
  onClose: () => void;
  handleBlock: () => void;
}
function ModalBlockPost({ open, onClose, handleBlock }: ModalBlockProps) {
  return (
    <Modal
      title="Xác nhận"
      closable={{ "aria-label": "Custom Close Button" }}
      open={open}
      onOk={handleBlock}
      onCancel={onClose}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: 12,
          minHeight: 60,
        }}
      >
        <WarningFilled style={{ color: "#faad14", fontSize: 30 }} />
        <span> Bạn có chắc chắn muốn ngừng xuất bản bài viết ?</span>
      </div>
    </Modal>
  );
}

export default ModalBlockPost;
