import { Button } from "antd";

interface AddPostButtonProps {
  onClick?: () => void;
  text?: string;
}

function AddPostButton({
  onClick,
  text = "Thêm mới bài viết",
}: AddPostButtonProps) {
  return (
    <Button color="primary" variant="solid" onClick={onClick}>
      {text}
    </Button>
  );
}

export default AddPostButton;
