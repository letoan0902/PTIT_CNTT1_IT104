import { createSlice } from "@reduxjs/toolkit";
import type { Student } from "../interface/student.interface";

type StateType = {
  isModalEditOpen: boolean;
  studentEdit: Student | null;
};

const initialState: StateType = {
  isModalEditOpen: false,
  studentEdit: null,
};

const modalEditSlice = createSlice({
  name: "editStudent",
  initialState,
  reducers: {
    openModalEdit(state, action) {
      state.isModalEditOpen = true;
      state.studentEdit = action.payload;
    },
    closeModalEdit(state) {
      state.isModalEditOpen = false;
      state.studentEdit = null;
    },
  },
});

export default modalEditSlice.reducer;
export const { openModalEdit, closeModalEdit } = modalEditSlice.actions;
