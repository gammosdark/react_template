import { put, takeEvery } from "redux-saga/effects";
import { ExampleActions } from "../actions";
import { exampleSlice } from "../reducers/example";

function* getExampleSaga() {
    const { getSuccess, getError } = exampleSlice.actions;

    try {
        // do something
        const response = {};
        
        yield put(getSuccess(response));
    } catch (err) {
        yield put(getError);
    }
}

export function* watchExampleSagas() {
    yield takeEvery(ExampleActions.GET, getExampleSaga);
}