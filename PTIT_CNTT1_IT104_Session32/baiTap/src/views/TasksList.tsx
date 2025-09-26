import type { FormProps } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Modal, Radio } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

type TaskType = {
  id: string;
  nameTask: string;
  level: string;
  isCompleted: boolean;
};

type FieldType = {
  nameTask?: string;
  level?: string;
};

export default function TasksList() {
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false);
  const [isModalRemoveOpen, setIsModalRemoveOpen] = useState<boolean>(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState<TaskType | null>(null);
  const [taskRemove, setTaskRemove] = useState<TaskType | null>(null);
  const [filterLevel, setFilterLevel] = useState<string | null>(null);
  const tasks: TaskType[] = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();

  //! Thêm Task mới
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (
      tasks.some(
        (task) =>
          task.nameTask.trim().toLowerCase() ===
          (values.nameTask || "").trim().toLowerCase()
      )
    ) {
      form.setFields([
        {
          name: "nameTask",
          errors: ["Tên công việc đã tồn tại!"],
        },
      ]);
      return;
    }
    dispatch({
      type: "add",
      payload: {
        id: uuid(),
        nameTask: values.nameTask,
        level: values.level,
        isCompleted: false,
      },
    });
    form.resetFields();
    setIsModalAddOpen(false);
  };

  //! Thay đổi trạng thái hoàn thành
  const handleChangeStatus = (task: TaskType) => {
    dispatch({
      type: "changeStatus",
      payload: task,
    });
  };

  //! Sửa Task
  const openModalEdit = (task: TaskType) => {
    setTaskEdit(task);
    setIsModalEditOpen(true);
    setTimeout(() => {
      editForm.setFieldsValue({
        nameTask: task.nameTask,
        level: task.level,
      });
    }, 0);
  };

  const onEditFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (
      tasks.some(
        (t) =>
          t.id !== taskEdit?.id &&
          t.nameTask.trim().toLowerCase() ===
            (values.nameTask || "").trim().toLowerCase()
      )
    ) {
      editForm.setFields([
        {
          name: "nameTask",
          errors: ["Tên công việc đã tồn tại!"],
        },
      ]);
      return;
    }
    dispatch({
      type: "edit",
      payload: {
        ...taskEdit,
        nameTask: values.nameTask,
        level: values.level,
      },
    });
    setIsModalEditOpen(false);
    setTaskEdit(null);
    editForm.resetFields();
  };
  console.log(tasks);

  //! Xoá Task
  const openModalDelete = (task: TaskType) => {
    setTaskRemove(task);
    setIsModalRemoveOpen(true);
  };
  const handleRemove = () => {
    dispatch({
      type: "delete",
      payload: taskRemove,
    });
    setTaskRemove(null);
    setIsModalRemoveOpen(false);
  };

  const completedCount = tasks.filter((task) => task.isCompleted).length;
  const handleFinishAll = () => {
    dispatch({
      type: "finishAll",
    });
  };
  const handleDeleteAll = () => {
    dispatch({
      type: "deleteAll",
    });
  };
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="w-[700px]">
        <h1 className="text-2xl font-bold text-center">Danh sách công việc</h1>
        <div className="flex gap-2 justify-end w-full mt-2">
          <select
            className="border rounded-md px-2 py-1"
            value={filterLevel ?? ""}
            onChange={(e) => setFilterLevel(e.target.value || null)}
          >
            <option value="">Tất cả cấp độ</option>
            <option value="0">Khẩn cấp</option>
            <option value="1">Quan trọng</option>
            <option value="2">Bình thường</option>
            <option value="3">Không quan trọng</option>
          </select>
          <Button
            color="primary"
            variant="solid"
            onClick={() => setIsModalAddOpen(true)}
          >
            Thêm
          </Button>
        </div>
        <div className="mt-3">
          {tasks
            .filter(
              (task) =>
                filterLevel === null ||
                filterLevel === "" ||
                task.level === filterLevel
            )
            .map((task) => (
              <Card className="w-full mt-3 shadow-lg" key={task.id}>
                <div className="flex justify-between items-center">
                  <div>
                    <Checkbox
                      className="text-lg mr-2"
                      checked={task.isCompleted}
                      onChange={() => handleChangeStatus(task)}
                    >
                      <span
                        style={{
                          textDecoration: task.isCompleted
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {task.nameTask}
                      </span>
                    </Checkbox>
                    {task.level === "0" && (
                      <span className="bg-red-500 text-white rounded-full px-3 py-1">
                        Khẩn cấp
                      </span>
                    )}
                    {task.level === "1" && (
                      <span className="bg-orange-500 text-white rounded-full px-3 py-1">
                        Quan trọng
                      </span>
                    )}
                    {task.level === "2" && (
                      <span className="bg-blue-500 text-white rounded-full px-3 py-1">
                        Bình thường
                      </span>
                    )}
                    {task.level === "3" && (
                      <span className="bg-black text-white rounded-full px-3 py-1">
                        Không quan trọng
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      color="orange"
                      variant="filled"
                      onClick={() => openModalEdit(task)}
                    >
                      Sửa
                    </Button>

                    <Button
                      color="danger"
                      variant="filled"
                      onClick={() => openModalDelete(task)}
                    >
                      Xoá
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>
        <div className="flex items-center justify-between mt-7">
          <div>
            {tasks.length > 0 && completedCount === tasks.length ? (
              <span
                style={{
                  color: "#22c55e",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <CheckCircleFilled style={{ fontSize: 20, marginRight: 6 }} />
                <b>Hoàn thành công việc</b>
              </span>
            ) : (
              <>
                Số công việc hoàn thành: <b>{completedCount}</b>
              </>
            )}
          </div>
          <div className="flex gap-4">
            <Button color="primary" variant="solid" onClick={handleFinishAll}>
              Hoàn thành tất cả
            </Button>
            <Button color="danger" variant="outlined" onClick={handleDeleteAll}>
              Xoá tất cả
            </Button>
          </div>
        </div>
      </div>

      {/* Modal thêm Task */}
      <Modal
        title="Thêm mới công việc"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalAddOpen}
        onCancel={() => setIsModalAddOpen(false)}
        footer={null}
        width={550}
      >
        <Form
          form={form}
          name="basic"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Tên công việc"
            name="nameTask"
            rules={[{ required: true, message: "Vui lòng nhập tên công việc" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Cấp độ"
            name="level"
            rules={[{ required: true, message: "Vui lòng chọn cấp độ" }]}
          >
            <Radio.Group>
              <Radio value="0"> Khẩn cấp </Radio>
              <Radio value="1"> Quan trọng </Radio>
              <Radio value="2"> Bình thường </Radio>
              <Radio value="3"> Không quan trọng </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label={null}>
            <Button className="w-full" type="primary" htmlType="submit">
              Thêm mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal sửa Task */}
      <Modal
        title="Sửa công việc"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalEditOpen}
        onCancel={() => {
          setIsModalEditOpen(false);
          setTaskEdit(null);
          editForm.resetFields();
        }}
        footer={null}
        width={550}
      >
        <Form
          form={editForm}
          name="editTask"
          style={{ maxWidth: 600 }}
          onFinish={onEditFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Tên công việc"
            name="nameTask"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên công việc",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Cấp độ"
            name="level"
            rules={[{ required: true, message: "Vui lòng chọn cấp độ" }]}
          >
            <Radio.Group>
              <Radio value="0"> Khẩn cấp </Radio>
              <Radio value="1"> Quan trọng </Radio>
              <Radio value="2"> Bình thường </Radio>
              <Radio value="3"> Không quan trọng </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label={null}>
            <Button className="w-full" type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal xoá Task */}
      <Modal
        title="Xác nhận"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalRemoveOpen}
        footer={[
          <Button key="cancel" onClick={() => setIsModalRemoveOpen(false)}>
            Huỷ
          </Button>,
          <Button key="ok" type="primary" danger onClick={handleRemove}>
            Xoá
          </Button>,
        ]}
        onCancel={() => setIsModalRemoveOpen(false)}
      >
        Bạn chắc chắn muốn xoá công việc này không
      </Modal>
    </div>
  );
}
