import "./App.css";
import { useEffect, useState } from "react";
import { taskAPI } from "./utils/http";
import TaskInput from "./components/TaskInput";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import TaskActions from "./components/TaskActions";
import ModalDelete from "./components/ModalDelete";
import { notification } from "antd";
import Loading from "./components/Loading";
import ModalEdit from "./components/ModalEdit";

type TaskType = {
  id: string;
  name: string;
  completed: boolean;
};

type FilterType = "all" | "completed" | "pending";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false);
  const [idTaskDelete, setIdTaskDelete] = useState<string>("");
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState<TaskType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTasks = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await taskAPI.get("tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  //! AddTask
  const handleAddTask = async (taskName: string) => {
    try {
      const response = await taskAPI.post("tasks", {
        name: taskName.trim(),
        completed: false,
      });
      if (response.status === 201) {
        notification.success({ message: "Thêm công việc thành công" });
        getTasks();
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: "Thêm công việc thất bại" });
    }
  };

  //!CheckComplete
  const handleToggleComplete = async (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      console.error("Lỗi Data");
      return;
    }
    try {
      await taskAPI.put(`tasks/${id}`, { ...task, completed: !task.completed });
    } catch (error) {
      console.log(error);
      notification.error({ message: "Không cập nhật được công việc" });
    }

    //Kiểm tra hoàn thành công việc
    try {
      const checkTaskFinish = await taskAPI.get(`tasks?completed=false`);
      if (checkTaskFinish.data.length === 0) {
        notification.success({ message: "Hoàn thành công việc" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //!Edit
  const openModalEdit = (id: string) => {
    const foundTask = tasks.find((task) => task.id === id) || null;
    setTaskEdit(foundTask);
    setIsModalEditOpen(true);
  };

  const handleEdit = async (taskName: string) => {
    const updateTask = { ...taskEdit, name: taskName };
    try {
      const response = await taskAPI.put(`tasks/${taskEdit?.id}`, updateTask);
      if (response.status === 200) {
        notification.success({ message: "Cập nhật công việc thành công" });
        setIsModalEditOpen(false);
        setTaskEdit(null);
        getTasks();
      }
    } catch (error) {
      console.error(error);
      notification.error({ message: "Cập nhật công việc không thành công" });
    }
  };

  //!Delete
  const openModalDelete = (id: string) => {
    setIsModalDeleteOpen(true);
    setIdTaskDelete(id);
  };

  const handleDelete = async () => {
    try {
      const response = await taskAPI.delete(`tasks/${idTaskDelete}`);
      if (response.status === 200) {
        notification.success({ message: "Xoá công việc thành công" });
        getTasks();
        setIsModalDeleteOpen(false);
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: "Xoá công việc thất bại" });
      setIsModalDeleteOpen(false);
    }
  };

  const handleDeleteCompleted = async () => {
    const completedTasks = tasks.filter((task) => task.completed);
    try {
      await Promise.all(
        completedTasks.map((task) => taskAPI.delete(`tasks/${task.id}`))
      );
      notification.success({ message: "Xoá công việc hoàn thành thành công" });
      getTasks();
    } catch (error) {
      console.log(error);
      notification.error({ message: "Lỗi không xoá được công việc" });
    }
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "pending") return !task.completed;
    return true;
  });

  return (
    <>
      <h1 className="text-3xl font-bold">Quản lý công việc</h1>
      <div className="w-[450px] m-auto">
        <TaskInput tasks={tasks} onAddTask={handleAddTask} />

        <TaskFilter
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onEdit={openModalEdit}
          onDelete={openModalDelete}
        />

        <TaskActions
          onDeleteCompleted={handleDeleteCompleted}
          onDeleteAll={handleDeleteAll}
        />
      </div>

      <ModalDelete
        open={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        handleDelete={handleDelete}
      />
      <ModalEdit
        tasks={tasks}
        taskEdit={taskEdit || null}
        open={isModalEditOpen}
        onClose={() => setIsModalEditOpen(false)}
        handleEdit={handleEdit}
      />
      <Loading isLoading={isLoading} />
    </>
  );
}

export default App;
