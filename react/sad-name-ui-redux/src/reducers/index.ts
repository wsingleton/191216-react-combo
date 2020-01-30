import { combineReducers } from "redux";


// it will containe subinterfaces that represent different parts of state
export interface IState {

}


// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({

})