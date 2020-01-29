import React from 'react';
import { getChuckNorrisJoke } from '../../remote/chuck-norris-clients/chuck-norris-jokes';



interface IChuckNorrisState {
    currentJoke:string
    numJokesAcquired:number
}

export class ChuckNorrisComponent extends React.Component<any, IChuckNorrisState> {
    constructor(props:any) {
        super(props);
        this.state = {
            currentJoke: 'This is a very funny Chuck Norris joke',
            numJokesAcquired: 0
        }
    }

    async componentDidMount() {
        let joke = await getChuckNorrisJoke();
        this.setState({
            ...this.state,
            currentJoke:joke,
            numJokesAcquired: this.state.numJokesAcquired+1
        })
    }

    getNewJoke = async () => {
        let joke = await getChuckNorrisJoke();
        this.setState({
            ...this.state,
            currentJoke:joke,
            numJokesAcquired: this.state.numJokesAcquired+1
        })
    }

    render() {
        return(
            <div>
                <p>This is the Chuck Norrkis Joke Component</p>
                <p>You have gotten this many jokes: {this.state.numJokesAcquired}</p>
                <p>{this.state.currentJoke}</p>
                <button onClick={this.getNewJoke}>UPDATE</button>
            </div>
        )
    }
}