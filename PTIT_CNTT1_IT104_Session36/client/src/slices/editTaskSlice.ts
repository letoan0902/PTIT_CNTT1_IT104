import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../interface/task.interface";

type StateType = {
  isTaskEdit: boolean;
  taskEdit: Task | null;
};

const initialState: StateType = {
  isTaskEdit: false,
  taskEdit: null,
};

const editTaskSlice = createSlice({
  name: "editTask",
  initialState,
  reducers: {
    setTaskEdit(state, action) {
      state.isTaskEdit = true;
      state.taskEdit = action.payload;
    },
    removeTaskEdit(state) {
      state.isTaskEdit = false;
      state.taskEdit = null;
    },
  },
});

export default editTaskSlice.reducer;
export const { setTaskEdit, removeTaskEdit } = editTaskSlice.actions;
