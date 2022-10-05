import { ExampleState, initialExampleState } from "../states/example";
import { AppState, initialAppState } from "./app-state";

export interface State {
    app: AppState;
    example: ExampleState;
};

export const prepareState = (): State => {
    const result: State = {
        app: initialAppState,
        example: initialExampleState,
    }

    return result;
};