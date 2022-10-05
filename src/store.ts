import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory, createMemoryHistory } from "history"
import createSagaMiddleware from "redux-saga";

import { getReducers } from "./reducers";
import { runSagas } from "./sagas";
import { prepareState } from "./server/state"

export const getStore = () => {
    const history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: getReducers(),
        preloadedState: prepareState(),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
    });

    runSagas(sagaMiddleware);
    return {store, history};
} 