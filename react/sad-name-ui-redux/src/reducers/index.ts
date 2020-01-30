import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";

// describe the data we want from the login component
export interface IUserState {
    currentUser:any
}


// it will containe subinterfaces that represent different parts of state
export interface IState {
    userState : IUserState
}


// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({
    userState:loginReducer,
    
})