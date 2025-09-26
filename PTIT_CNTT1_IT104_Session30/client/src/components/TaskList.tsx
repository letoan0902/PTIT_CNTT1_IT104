import TaskItem from "./TaskItem";

type TaskType = {
  id: string;
  name: string;
  completed: boolean;
};

interface TaskListProps {
  tasks: TaskType[];
  onToggleComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskList({
  tasks,
  onToggleComplete,
  onEdit,
  onDelete,
}: TaskListProps) {
  return (
    <div
      style={{
        maxHeight: 350,
        overflowY: tasks.length > 5 ? "auto" : "visible",
      }}
    >
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
