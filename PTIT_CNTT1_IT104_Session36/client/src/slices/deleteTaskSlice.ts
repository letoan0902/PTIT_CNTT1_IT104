import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../interface/task.interface";

type StateType = {
  isModalDeleteOpen: boolean;
  taskDelete: Task | null;
};

const initialState: StateType = {
  isModalDeleteOpen: false,
  taskDelete: null,
};

const deleteTaskSlice = createSlice({
  name: "deleteTask",
  initialState,
  reducers: {
    openModalDelete(state, action) {
      state.isModalDeleteOpen = true;
      state.taskDelete = action.payload;
    },
    closeModalDelete(state) {
      state.isModalDeleteOpen = false;
      state.taskDelete = null;
    },
  },
});

export default deleteTaskSlice.reducer;
export const { openModalDelete, closeModalDelete } = deleteTaskSlice.actions;
