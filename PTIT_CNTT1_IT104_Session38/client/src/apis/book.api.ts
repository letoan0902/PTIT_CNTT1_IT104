import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookAPI } from "../utils/http";
import type { Book } from "../interface/book.interface";

export const getAllBooks = createAsyncThunk("book/getAllBook", async () => {
  const response = await bookAPI.get("booksData");
  return response.data;
});

export const addBook = createAsyncThunk(
  "book/addBook",
  async (bookRequest: Book) => {
    const response = await bookAPI.post("booksData", bookRequest);
    return response.data;
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (bookRequest: Book) => {
    await bookAPI.delete(`booksData/${bookRequest.id}`);
    return bookRequest;
  }
);

export const updateBook = createAsyncThunk(
  "book/updateBook",
  async (bookRequest: Book) => {
    const response = await bookAPI.put(
      `booksData/${bookRequest.id}`,
      bookRequest
    );
    return response.data;
  }
);
