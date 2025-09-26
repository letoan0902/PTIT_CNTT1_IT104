import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentsAPI } from "../utils/http";
import type { Student } from "../interface/student.interface";

export const getAllStudent = createAsyncThunk(
  "student/getAllStudent",
  async () => {
    const response = await studentsAPI.get("students");
    return response.data;
  }
);

export const addStudent = createAsyncThunk(
  "student/addStudent",
  async (studentRequest: Student) => {
    const response = await studentsAPI.post("students", studentRequest);
    return response.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (studentRequest: Student) => {
    const response = await studentsAPI.delete(`students/${studentRequest.id}`);

    return response.data;
  }
);

export const editStudent = createAsyncThunk(
  "student/editStudent",
  async (studentRequest: Student) => {
    const response = await studentsAPI.put(
      `students/${studentRequest.id}`,
      studentRequest
    );

    return response.data;
  }
);
