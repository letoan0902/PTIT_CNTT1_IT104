import React from "react";
import { Modal, Form, Input, Button, Space, Typography, theme } from "antd";
import MDEditor from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";

type AddPostModalProps = {
  open: boolean;
  onClose: () => void;
  onPublish?: (payload: {
    title: string;
    imageUrl?: string;
    content: string;
  }) => Promise<void> | void;
};

type FormValues = {
  title: string;
  imageUrl?: string;
  content: string;
};

export default function AddPostModal({
  open,
  onClose,
  onPublish,
}: AddPostModalProps) {
  const [form] = Form.useForm<FormValues>();
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  // Nội dung mặc định (trong trường hợp muốn demo)
  React.useEffect(() => {
    if (open) {
      form.setFieldsValue({
        content:
          "## Chào mừng!\n\nBạn có thể **soạn thảo** ở khung bên trái và xem **xem trước** ở bên phải.",
      });
    }
  }, [open, form]);

  const handleReset = () => {
    form.resetFields();
  };

  // Đồng bộ MDEditor với Form (trường 'content')
  const content = Form.useWatch("content", form);

  return (
    <Modal
      title={
        <Typography.Title level={3} style={{ margin: 0 }}>
          Thêm mới bài viết
        </Typography.Title>
      }
      open={open}
      onCancel={onClose}
      footer={null}
      width={960}
      styles={{ body: { paddingTop: 8 } }}
      destroyOnHidden
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onPublish}
        initialValues={{ title: "", imageUrl: "", content: "" }}
      >
        <Form.Item
          label="Tên bài viết"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tên bài viết" }]}
        >
          <Input placeholder="Nhập tiêu đề..." />
        </Form.Item>

        <Form.Item label="Hình ảnh" name="imageUrl">
          <Input placeholder="Dán URL hình ảnh (tuỳ chọn)..." />
        </Form.Item>

        <Form.Item
          label="Nội dung"
          required
          // để hiển thị lỗi đẹp khi trống
          validateStatus={!content ? "error" : ""}
          help={!content ? "Vui lòng nhập nội dung" : undefined}
          style={{ marginBottom: 12 }}
        >
          <div data-color-mode="light">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {/* Editor (trái) */}
              <Form.Item name="content" noStyle>
                <MDEditor
                  height={360}
                  value={content}
                  onChange={(val) =>
                    form.setFieldsValue({ content: val || "" })
                  }
                  preview="edit"
                  visibleDragbar
                  style={{ borderRadius: borderRadiusLG, overflow: "hidden" }}
                />
              </Form.Item>

              {/* Preview (phải) */}
              <div
                style={{
                  border: "1px solid #eee",
                  borderRadius: borderRadiusLG,
                  padding: 12,
                  height: 360,
                  overflow: "auto",
                  background: "#fff",
                }}
              >
                <MarkdownPreview source={content || "*Nhập nội dung*"} />
              </div>
            </div>
          </div>
        </Form.Item>

        <Space
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}
        >
          <Button onClick={handleReset}>Làm mới</Button>
          <Button type="primary" onClick={() => form.submit()}>
            Xuất bản
          </Button>
        </Space>
      </Form>
    </Modal>
  );
}
