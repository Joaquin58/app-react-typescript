import { User } from '../actions/actions'
import { ActionTypes, Action } from '../actions/types';


export interface UserStoreState {
    users: User[];
    loading: boolean;
}

const initialState: UserStoreState = {
    users: [],
    loading: true
}

export const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchUsers:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case ActionTypes.vaciarestado:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case ActionTypes.deleteUser:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case ActionTypes.loadingAction:
            return {
                ...state,
                loading: true
            };
        default: return state;
    }
};