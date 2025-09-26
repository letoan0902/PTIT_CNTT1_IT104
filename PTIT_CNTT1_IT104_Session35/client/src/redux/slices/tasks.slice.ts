import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const getAllTasks = createAsyncThunk("task/getAllTasks",async ()=>{
    const response = await axios.get("http://localhost:3000/tasks")
    return response.data
})

type Task = {
    id: number,
    name: string,
    status: "ACTIVE" | "INACTIVE",
}

type InitialState = {
    status: "idle" | "pending" | "success" | "failed",
    data: Task[],
    error: string | null | undefined
}


const initialState: InitialState = {
    status: "idle",
    data: [],
    error: null
}


const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getAllTasks.pending, (state)=>{
            state.status = "pending"
        })
        .addCase(getAllTasks.fulfilled, (state, action)=>{
            state.status = "success"
            state.data = action.payload
        })
        .addCase(getAllTasks.rejected, (state, action)=>{
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default taskSlice.reducer;