import React from 'react'
import { Route } from 'react-router'
import { LoginComponent } from '../login-component/LoginComponent'
import { PokemonComponent } from '../pokemon-component/PokemonComponent'

export class StatePassingComponent extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            currentUser:null
        }
    }

    updateUser= (user:any) =>{
        this.setState({
            ...this.state,
            currentUser:user
        })
    }

    render(){
        return(
            <>
            <Route path='/pokemon' render={()=><PokemonComponent user={this.state.currentUser}/>}/>
            <Route path='/login' render={()=><LoginComponent updateUser={this.updateUser}/>}/>
            </>
        )
    }
}