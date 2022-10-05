import { combineReducers } from "redux"
import { State } from "../server/state"
import { appSlice } from "./app";
import { exampleSlice } from "./example";

export const getReducers = () => combineReducers<State>({
    app: appSlice.reducer,
    example: exampleSlice.reducer,
});