import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increate(state){
            state.value +=1;
        },
        decreate(state){
            state.value -=1;
        },
        onreset(state){
            state.value = 0;
        }
    }
})

export const {increate, decreate, onreset} = counterSlice.actions
export default counterSlice.reducer;