import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { pokemonReducer } from "./pokemon-reducer";
import { clickerReducer } from "./clicker-reducer";

// describe the data we want from the login component
export interface IUserState {
    currentUser:any
    loginMessage:string
}

//this is the data we want from the pokemon state
export interface IPokemonState {
    allPokemon:any[]
}

export interface IClickerState {
    numClicks:number
}


// it will containe subinterfaces that represent different parts of state
export interface IState {
    userState : IUserState
    pokemonState: IPokemonState
    clickerState: IClickerState
}


// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({
    userState:loginReducer,
    pokemonState:pokemonReducer,
    clickerState:clickerReducer

})