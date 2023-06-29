import { counterSliceReducer } from "../modules/counterModule/counterSliceWithActions";
import { combineReducers }  from "@reduxjs/toolkit";
import { messageSliceReducer } from "../modules/messageModule/messageSliceWithActions";

export interface RootState {
    counter: number;
    messages: Array<string>;
}

export const rootReducer = combineReducers<RootState>({
    counter: counterSliceReducer,
    messages: messageSliceReducer
})
