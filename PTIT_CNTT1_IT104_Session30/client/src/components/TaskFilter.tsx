import { Button, Card } from "antd";

type FilterType = "all" | "completed" | "pending";

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

function TaskFilter({ currentFilter, onFilterChange }: TaskFilterProps) {
  return (
    <div className="flex justify-center mt-3">
      <Card style={{ width: 450 }}>
        <div className="flex justify-center gap-2">
          <Button
            color={currentFilter === "all" ? "primary" : "default"}
            variant={currentFilter === "all" ? "solid" : "outlined"}
            onClick={() => onFilterChange("all")}
          >
            Tất cả
          </Button>
          <Button
            color={currentFilter === "completed" ? "primary" : "default"}
            variant={currentFilter === "completed" ? "solid" : "outlined"}
            onClick={() => onFilterChange("completed")}
          >
            Hoàn thành
          </Button>
          <Button
            color={currentFilter === "pending" ? "primary" : "default"}
            variant={currentFilter === "pending" ? "solid" : "outlined"}
            onClick={() => onFilterChange("pending")}
          >
            Đang thực hiện
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default TaskFilter;
