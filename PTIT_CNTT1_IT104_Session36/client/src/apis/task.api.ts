import { createAsyncThunk } from "@reduxjs/toolkit";
import { taskAPI } from "../utils/http";
import type { Task } from "../interface/task.interface";

export const getAllTask = createAsyncThunk("tasks/getAllTask", async () => {
  const response = await taskAPI.get("tasks");
  return response.data;
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (taskRequest: Task) => {
    const response = await taskAPI.post("tasks", taskRequest);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: string) => {
    await taskAPI.delete(`tasks/${id}`);
    return id;
  }
);

export const editTask = createAsyncThunk(
  "task/updateTask",
  async (taskRequest: Task) => {
    await taskAPI.put(`tasks/${taskRequest.id}`, taskRequest);
    return taskRequest;
  }
);
