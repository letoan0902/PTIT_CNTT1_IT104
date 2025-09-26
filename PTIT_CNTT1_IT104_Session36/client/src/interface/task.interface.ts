export interface Task {
  id?: string;
  taskName: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}
