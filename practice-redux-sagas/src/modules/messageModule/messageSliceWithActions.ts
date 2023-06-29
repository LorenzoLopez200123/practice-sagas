import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateMessageSlice = Array<string>;


const initialState: InitialStateMessageSlice = [];


const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        sendMessage: (state: InitialStateMessageSlice, action: PayloadAction<string>) => {
            return [...state, action.payload];
        },
        removeMessage: (state: InitialStateMessageSlice, action: PayloadAction<string>) => {
            return state.filter((msg) => msg !== action.payload);
        },
    },
});

export const { sendMessage, removeMessage } = messageSlice.actions;

export const messageSliceReducer = messageSlice.reducer;