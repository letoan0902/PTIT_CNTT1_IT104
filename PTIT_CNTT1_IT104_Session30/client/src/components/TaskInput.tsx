import { Button, Card, Form, Input, type FormProps } from "antd";

type TaskType = {
  id: string;
  name: string;
  completed: boolean;
};

interface TaskInputProps {
  tasks: TaskType[];
  onAddTask: (taskName: string) => Promise<void> | void;
}

type FieldType = {
  taskName?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function TaskInput({ tasks, onAddTask }: TaskInputProps) {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (values.taskName) {
      await onAddTask(values.taskName);
      form.resetFields();
    }
  };

  return (
    <div className="flex justify-center mt-3">
      <Card style={{ width: 450 }}>
        <Form
          form={form}
          name="addTask"
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
            <Input placeholder="Nhập tên công việc" />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className=" w-full">
              Thêm công việc
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default TaskInput;
