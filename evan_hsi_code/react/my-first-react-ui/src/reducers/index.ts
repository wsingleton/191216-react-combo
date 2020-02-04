import { combineReducers } from "redux";

export interface IUserState {
    currentUser:any
}

export interface IState {
    userState : IUserState
}


export const state = combineReducers<IState>({

})