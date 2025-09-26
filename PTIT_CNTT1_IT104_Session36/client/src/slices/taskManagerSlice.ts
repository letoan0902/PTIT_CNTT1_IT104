import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../interface/task.interface";
import { addTask, deleteTask, editTask, getAllTask } from "../apis/task.api";

type StateType = {
  status: "idle" | "pending" | "success" | "failed";
  data: Task[];
  error: undefined | string;
};

const initialState: StateType = {
  status: "idle",
  data: [],
  error: undefined,
};

const taskManagerSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Lấy dữ liệu
      .addCase(getAllTask.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      //Thêm dữ liệu
      .addCase(addTask.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      //Xoá dữ liệu
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter((task) => task.id !== action.payload);
      })
      // Cập nhật dữ liệu
      .addCase(editTask.fulfilled, (state, action) => {
        state.data = state.data.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        );
      });
  },
});

export default taskManagerSlice.reducer;
