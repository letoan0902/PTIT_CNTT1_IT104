import { Card, Checkbox } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type TaskType = {
  id: string;
  name: string;
  completed: boolean;
};

interface TaskItemProps {
  task: TaskType;
  onToggleComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskItem({ task, onToggleComplete, onEdit, onDelete }: TaskItemProps) {
  return (
    <div className="flex justify-center mt-3">
      <Card style={{ width: 450 }}>
        <div className="flex justify-between text-xl">
          <Checkbox
            className="text-lg"
            onChange={() => onToggleComplete(task.id)}
            checked={task.completed}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>
          </Checkbox>
          <div className="flex gap-4">
            <EditOutlined
              style={{ color: "#d4b106", cursor: "pointer" }}
              onClick={() => onEdit(task.id)}
            />
            <DeleteOutlined
              style={{ color: "#f5222d", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TaskItem;
