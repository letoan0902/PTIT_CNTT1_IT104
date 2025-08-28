import { useReducer } from 'react';
import { TaskContext } from './TaskContext';
import TodoList from '../components/TodoList';
import type { Task } from '../interfaces/task.interface';
import { taskReducer } from '../reducers/taskReducer';

export default function TaskContextProvider() {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const handleAddTask = (task: Task) => {
        dispatch({ type: 'ADD_TASK', payload: task });
    };

    const handleUpdateTask = (id: number | string, name: string) => {
        dispatch({ type: 'UPDATE_TASK', payload: { id, name } });
    };

    const handleDeleteTask = (id: number | string) => {
        dispatch({ type: 'DELETE_TASK', payload: { id } });
    };

    const handleToggleTask = (id: number | string) => {
        dispatch({ type: 'TOGGLE_TASK', payload: { id } });
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                handleAddTask,
                handleUpdateTask,
                handleDeleteTask,
                handleToggleTask,
            }}
        >
            <TodoList />
        </TaskContext.Provider>
    );
}