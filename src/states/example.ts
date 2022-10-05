export interface ExampleState {
    isLoaded: boolean;
    items: string[];
};

export const initialExampleState : ExampleState = {
    isLoaded: false,
    items: [],
}