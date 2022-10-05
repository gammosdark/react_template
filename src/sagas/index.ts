import { all } from "@redux-saga/core/effects";
import { SagaMiddleware } from "redux-saga";
import { watchExampleSagas } from "./example";

function* getSagas() {
    yield all([
        watchExampleSagas()
    ]);
}

export const runSagas = (middleware: SagaMiddleware) => {
    middleware.run(getSagas)
}