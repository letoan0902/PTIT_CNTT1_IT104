import { createSlice } from "@reduxjs/toolkit";
import type { Book } from "../interface/book.interface";

type StateType = {
  isModalEditOpen: boolean;
  bookEdit: Book | null;
};

const initialState: StateType = {
  isModalEditOpen: false,
  bookEdit: null,
};

const modalEditManager = createSlice({
  name: "modalEdit",
  initialState,
  reducers: {
    openModalEdit(state, action) {
      state.isModalEditOpen = true;
      state.bookEdit = action.payload;
    },
    closeModalEdit(state) {
      state.isModalEditOpen = false;
      state.bookEdit = null;
    },
  },
});

export default modalEditManager.reducer;
export const { openModalEdit, closeModalEdit } = modalEditManager.actions;
