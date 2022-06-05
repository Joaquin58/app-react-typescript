import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
const url = 'http://localhost:3001/user';
interface Role {
    id: string;
    name: string
}
export interface User {
    id: number;
    name: string;
    lastname: string;
    createdAt?: string;
    updatedAt?: string;
    roleId?: string;
    roles?: Role;
}

export interface FetchUsersAction {
    type: ActionTypes.fetchUsers | ActionTypes.vaciarestado;
    payload: User[];
}

export interface DeleteUsersAction {
    type: ActionTypes.deleteUser,
    payload: User[];
}

export interface LoadingAction {
    type: ActionTypes.loadingAction
}

export const fetchUsers = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<User[]>(url);
        dispatch<FetchUsersAction>({
            type: ActionTypes.fetchUsers,
            payload: response.data,
        });
    };
};

export const vaciarestado = () => {
    return {
        type: ActionTypes.vaciarestado,
        payload: []
    }
};

export const deleteUser = (id: string) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.delete<User[]>(`${url}/${id}`)
        dispatch<DeleteUsersAction>({
            type: ActionTypes.deleteUser,
            payload: response.data
        })
    }
}