import type { listTask } from '../interfaces/listTasks.interface';

export default function TaskComplete({ data }: listTask) {
    const len1 = data.filter((t) => t.isCompleted === true).length;
    const len2 = data.length;
    return (
        <>
            {len1 === 0 ? (
                <div className="text-center text-danger fw-medium">
                    Chưa có công việc nào hoàn thành
                </div>
            ) : (
                <div className="text-center text-success fw-medium">
                    {len1}/ {len2} công việc đã hoàn thành
                </div>
            )}
        </>
    );
}