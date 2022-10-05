import { createSlice, Slice } from "@reduxjs/toolkit";
import { initialExampleState } from "../states/example";

export const exampleSlice: Slice = createSlice({
    name: 'example',
    initialState: initialExampleState,
    reducers: {
        getSuccess: (state, action) => {
            return {...state, isLoaded: true, items: action.payload};
        },
        getError: () => {
            return initialExampleState;
        }
    },
});