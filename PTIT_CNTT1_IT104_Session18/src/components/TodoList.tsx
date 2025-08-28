import { useContext } from 'react';
import TaskComplete from './TaskComplete';
import TaskEmpty from './TaskEmpty';
import TaskList from './TaskList';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import { TaskContext } from '../context/TaskContext';

export default function TodoList() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskList must be used within a TaskContextProvider');
    }
    const { tasks } = context;
    const len = tasks.length;
    return (
        <>
            <div className="container todo-container">
                {/* Phần tiêu đề */}
                <TodoHeader />

                {/* Phần todoinput (lấy dữ liệu từ người dùng) */}
                <TodoInput />

                {/* Phần danh sách công việc */}
                <TaskList />
                
                {len !== 0 ? <TaskComplete data={tasks} /> : <TaskEmpty />}

                {/* Hiển thị công việc hoàn thành */}

                {/* Hiển thị khi chưa có công việc */}
            </div>
        </>
    );
}