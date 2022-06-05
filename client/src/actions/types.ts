import { FetchUsersAction, DeleteUsersAction, LoadingAction } from "./actions";
export enum ActionTypes {
    fetchUsers,
    vaciarestado,
    deleteUser,
    loadingAction
}

export type Action = FetchUsersAction | DeleteUsersAction | LoadingAction