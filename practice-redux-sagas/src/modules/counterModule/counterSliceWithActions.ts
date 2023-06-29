import { createSlice } from "@reduxjs/toolkit";

type InitialStateCounterSlice = number;

const initialState: InitialStateCounterSlice = 0

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        default: (state) => state,
    },
});

export const { increment, decrement } = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;