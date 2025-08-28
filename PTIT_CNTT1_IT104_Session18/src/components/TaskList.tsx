import { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';
import type { Task } from '../interfaces/task.interface';

export default function TaskList() {
    // Bước 3: Lấy giá trị từ context thông qua hook useContext
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskList must be used within a TaskContextProvider');
    }
    const { tasks } = context;

    return (
        <>
            {/* Phần hiển thị các TaskItem */}
            <ul className="list-group my-3">
                {tasks.map((task: Task) => (
                    <TaskItem data={task} key={task.id} />
                ))}
            </ul>
        </>
    );
}