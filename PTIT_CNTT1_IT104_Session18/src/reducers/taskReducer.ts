import type { Task } from '../interfaces/task.interface';

type Action =
    | {
          type: 'ADD_TASK';
          payload: { id: number | string; name: string; isCompleted: boolean };
      }
    | {
          type: 'UPDATE_TASK';
          payload: { id: number | string; name: string };
      }
    | { type: 'DELETE_TASK'; payload: { id: number | string } }
    | { type: 'TOGGLE_TASK'; payload: { id: number | string } };

export const taskReducer = (state: Task[], action: Action): Task[] => {
    switch (action.type) {
        // Tại sao mặc dù đã clone ra một mảng mới, mà vẫn bị bất đồng bộ
        case 'ADD_TASK': {
            // console.log('State trước khi thêm:', state);
            const newState = [...state, { ...action.payload }];
            // console.log('State sau khi thêm:', newState);
            return newState;
        }

        case 'DELETE_TASK': {
            // console.log('State trước khi xóa:', state);
            const newState = state.filter(
                (task) => task.id !== action.payload.id
            );
            // console.log('State sau khi xóa:', newState);
            return newState;
        }

        case 'TOGGLE_TASK': {
            // console.log('State trước khi toggle:', state);
            const newState = state.map((task) =>
                task.id === action.payload.id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            );
            // console.log('State sau khi toggle:', newState);
            return newState;
        }

        case 'UPDATE_TASK': {
            // console.log('State trước khi update:', state);
            const newState = state.map((task) =>
                task.id === action.payload.id
                    ? { ...task, name: action.payload.name }
                    : task
            );
            // console.log('State sau khi update:', newState);
            return newState;
        }

        default:
            return state;
    }
};