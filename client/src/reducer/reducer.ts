import { combineReducers } from "redux";
import { UserStoreState, userReducer } from "./users";

export interface StoreState {
    userState: UserStoreState
}

export const reducers = combineReducers<StoreState>({
    userState: userReducer,
});

export type IRootState = ReturnType<typeof reducers>