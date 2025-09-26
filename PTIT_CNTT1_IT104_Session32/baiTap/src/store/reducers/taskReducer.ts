type TaskType = {
  id: string;
  nameTask: string;
  level: string;
  isCompleted: boolean;
};

type ActionType = {
  type: string;
  payload: TaskType;
};

const getInitialState = (): TaskType[] => {
  const local = localStorage.getItem("tasks");
  if (local) {
    try {
      return JSON.parse(local);
    } catch {
      return [];
    }
  }
  return [
    {
      id: "1",
      nameTask: "Demo",
      level: "2",
      isCompleted: false,
    },
    {
      id: "2",
      nameTask: "Test",
      level: "1",
      isCompleted: true,
    },
  ];
};

const initialState: TaskType[] = getInitialState();

export const taskReducer = (
  state: TaskType[] = initialState,
  action: ActionType
) => {
  let newState = state;
  switch (action.type) {
    case "add":
      newState = [...state, action.payload];
      break;
    case "changeStatus":
      newState = state.map((task) =>
        task.id === action.payload.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
      break;
    case "delete":
      newState = state.filter((task) => task.id !== action.payload.id);
      break;
    case "edit":
      newState = state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      break;
    case "finishAll":
      newState = state.map((task) => ({ ...task, isCompleted: true }));
      break;
    case "deleteAll":
      newState = [];
      break;
    default:
      newState = state;
      break;
  }
  localStorage.setItem("tasks", JSON.stringify(newState));
  return newState;
};
