import { configureStore } from "@reduxjs/toolkit";
import taskManagerSlice from "../slices/taskManagerSlice";
import deleteTaskSlice from "../slices/deleteTaskSlice";
import editTaskSlice from "../slices/editTaskSlice";
import filterTaskSlice from "../slices/filterTaskSlice";

export const store = configureStore({
  reducer: {
    task: taskManagerSlice,
    taskDelete: deleteTaskSlice,
    taskEdit: editTaskSlice,
    filter: filterTaskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
