import { State } from "../server/state";

export const exampleSelector = (state: State): string[] => state.example.items;