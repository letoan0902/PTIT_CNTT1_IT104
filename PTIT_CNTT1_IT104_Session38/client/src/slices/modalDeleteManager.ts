import { createSlice } from "@reduxjs/toolkit";
import type { Book } from "../interface/book.interface";

type StateType = {
  isModalDeleteOpen: boolean;
  bookDelete: Book | null;
};

const initialState: StateType = {
  isModalDeleteOpen: false,
  bookDelete: null,
};

const modalDeleteManager = createSlice({
  name: "modalDelete",
  initialState,
  reducers: {
    openModalDelete(state, action) {
      state.isModalDeleteOpen = true;
      state.bookDelete = action.payload;
    },
    closeModalDelete(state) {
      state.isModalDeleteOpen = false;
      state.bookDelete = null;
    },
  },
});

export default modalDeleteManager.reducer;
export const { openModalDelete, closeModalDelete } = modalDeleteManager.actions;
