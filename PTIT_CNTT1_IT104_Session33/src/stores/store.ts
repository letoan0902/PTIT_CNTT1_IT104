import {createStore} from "redux";
import { rootReducer } from "../reducers";

export type ActionType = {
    type: string;
    payload: unknown;
}

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>