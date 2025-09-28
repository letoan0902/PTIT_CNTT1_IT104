import type { Book } from "../interface/book.interface";
import { createSlice } from "@reduxjs/toolkit";
import { addBook, deleteBook, getAllBooks, updateBook } from "../apis/book.api";

type StateType = {
  status: "idle" | "pending" | "success" | "failed";
  data: Book[];
  error: undefined | string;
};

const initialState: StateType = {
  status: "idle",
  data: [],
  error: undefined,
};

const bookManagerSlice = createSlice({
  name: "bookManager",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.filter((book) => book.id !== action.payload.id);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        );
      });
  },
});

export default bookManagerSlice.reducer;
