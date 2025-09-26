import { Button } from "antd";

interface TaskActionsProps {
  onDeleteCompleted: () => void;
  onDeleteAll: () => void;
}

function TaskActions({ onDeleteCompleted, onDeleteAll }: TaskActionsProps) {
  return (
    <div className="flex justify-between mt-3 mx-1">
      <Button
        color="danger"
        variant="solid"
        size="large"
        onClick={onDeleteCompleted}
      >
        Xoá công việc hoàn thành
      </Button>
      <Button color="danger" variant="solid" size="large" onClick={onDeleteAll}>
        Xoá tất cả công việc
      </Button>
    </div>
  );
}

export default TaskActions;
