import { createSlice } from "@reduxjs/toolkit";
import type { Student } from "../interface/student.interface";
import {
  addStudent,
  deleteStudent,
  editStudent,
  getAllStudent,
} from "../apis/student.api";

type StateType = {
  status: "idle" | "pending" | "success" | "failed";
  data: Student[];
  error: undefined | string;
};

const initialState: StateType = {
  status: "idle",
  data: [],
  error: undefined,
};

export const studentManagerSlice = createSlice({
  name: "studentManager",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (student) => student.id !== action.payload.id
        );
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.data = state.data.map((student) =>
          student.id === action.payload.id
            ? { ...student, ...action.payload }
            : student
        );
      });
  },
});

export default studentManagerSlice.reducer;
