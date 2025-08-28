import { createContext } from 'react';
import type { Task } from '../interfaces/task.interface';



export interface TaskContextType {
    tasks: Task[];
    handleAddTask: (task: Task) => void;
    handleUpdateTask: (id: number | string, name: string) => void;
    handleDeleteTask: (id: number | string) => void;
    handleToggleTask: (id: number | string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
    undefined
);