import React from 'react';
import { getChuckNorrisJoke } from '../../remote/chuck-norris-clients/chuck-norris-jokes';

interface IChuckNorrisState {
    currentJoke:string
    numbJokesAcquired: number
    
}

export class ChuckNorrisComponent extends React.Component<any, IChuckNorrisState>{
    constructor(props:any){
        super(props)
        this.state = {
            currentJoke: 'This is a very funny Chuck Norris Joke!',
            numbJokesAcquired:0
        }
    }

    async componentDidMount(){
        let joke = await getChuckNorrisJoke()
        this.setState({
            ...this.state,
            currentJoke:joke,
            numbJokesAcquired:this.state.numbJokesAcquired+1
        })
    }

    getNewJoke = async()=>{
        let joke = await getChuckNorrisJoke()
        this.setState({
            ...this.state,
            currentJoke:joke,
            numbJokesAcquired:this.state.numbJokesAcquired+1
        })

    }

    render(){
        return(
            <div>
            <p>This is the Chuck Norris joke component</p>
            <p>You have gotten this many jokes: {this.state.numbJokesAcquired}</p>
            <p>Current Joke</p>
            <p>{this.state.currentJoke}</p>
            <button onClick={this.getNewJoke}>Joke!</button>
            </div>
        )
    }



}