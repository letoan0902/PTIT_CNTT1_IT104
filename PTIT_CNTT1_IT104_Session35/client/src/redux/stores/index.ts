import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../slices/tasks.slice";
import counterSlice from "../slices/counter.slice";


const store = configureStore({
    reducer: {
        tasks: tasksSlice,
        counter: counterSlice,
    }
})

export default store;

// Định nghĩa type để không báo lỗi
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']