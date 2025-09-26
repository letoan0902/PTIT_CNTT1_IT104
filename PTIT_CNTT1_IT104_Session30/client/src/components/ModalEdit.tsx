import { Button, Form, Input, Modal, type FormProps } from "antd";
import { useEffect } from "react";

type TaskType = {
  id: string;
  name: string;
  completed: boolean;
};

type FieldType = {
  taskName?: string;
};

interface ModalEditProps {
  tasks: TaskType[];
  taskEdit: TaskType | null;
  open: boolean;
  onClose: () => void;
  handleEdit: (taskName: string) => Promise<void> | void;
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function ModalEdit({
  tasks,
  taskEdit,
  open,
  onClose,
  handleEdit,
}: ModalEditProps) {
  const [form] = Form.useForm();
  useEffect(() => {
    if (open && taskEdit) {
      form.setFieldsValue({ taskName: taskEdit.name });
    }
  }, [open, taskEdit, form]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (values.taskName) {
      await handleEdit(values.taskName);
      form.resetFields();
    }
  };
  return (
    <div>
      <Modal title="Sửa công việc" open={open} onCancel={onClose} footer={null}>
        <Form
          form={form}
          name="editTask"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="taskName"
            rules={[
              { required: true, message: "Tên công việc không được để trống" },
              {
                validator: (_, value) => {
                  if (!value) return Promise.resolve();
                  const exists = tasks.some(
                    (task) =>
                      task.name.trim().toLowerCase() ===
                      value.trim().toLowerCase()
                  );
                  return exists
                    ? Promise.reject("Công việc này đã tồn tại!")
                    : Promise.resolve();
                },
              },
            ]}
          >
            <Input placeholder="Nhập tên công việc" className="mt-2" />
          </Form.Item>

          <Form.Item label={null} className="flex justify-end ">
            <Button
              type="default"
              htmlType="button"
              onClick={onClose}
              className="mr-3"
            >
              Huỷ
            </Button>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalEdit;
