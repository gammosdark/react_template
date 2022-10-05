import { createSlice } from "@reduxjs/toolkit";
import { initialAppState } from "../server/app-state";

export const appSlice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setAppError: (state, action) => {
            return {...state, error: action.payload};
        }
    }
});