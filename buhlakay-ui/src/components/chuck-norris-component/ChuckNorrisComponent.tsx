import React from 'react';
import { getChuckNorrisJoke } from '../../remote/chuck-norris-clients/chuck-norris-jokes';

interface IChuckNorrisState {
    currentJoke:string,
    numJokesAcquired:number
}

export class ChuckNorrisComponent extends React.Component<any, IChuckNorrisState>{
    constructor(props:any) {
        super(props)
        this.state = {
            currentJoke:'Chuck Norris does not have a chin under his beard, but another fist',
            numJokesAcquired:0
        }
    }

    getNewJoke = async () => {
        let joke = await getChuckNorrisJoke();
        this.setState({
            ...this.state,
            currentJoke:joke,
            numJokesAcquired:this.state.numJokesAcquired + 1
        })
    }

    render() {
        return(
            <div>
                <p>This is the ChuckNorris Joke Component</p>
                <p>You have gotten this many jokes: {this.state.numJokesAcquired}</p>
                <p>Current Jokes</p>
                <p>{this.state.currentJoke}</p>
                <button onClick={this.getNewJoke}>GetNewJoke</button>
            </div>
        )
    }
}