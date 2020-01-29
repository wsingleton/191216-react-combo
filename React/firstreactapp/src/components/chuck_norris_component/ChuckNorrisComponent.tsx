import React  from "react";
import { getChuckNorrisJoke } from "../../remote/remote chuck norris jokes/chuck_norris_jokes";

interface IChuckNorrisState{
    currentJoke:string,
    numJokesAcquired:number
}

export class ChuckNorrisComponent extends React.Component<any,IChuckNorrisState>{

    constructor(props:any){
        super(props)
        this.state = {
            currentJoke:"The bible was called Chuck and friends",
            numJokesAcquired:0
        }
    }

    async componentDidMount(){
        let joke = await getChuckNorrisJoke()
        this.setState({
            ...this.state,
            currentJoke: joke,
            numJokesAcquired: this.state.numJokesAcquired+1
        })
    }
    getNewJoke = async () =>{
        let joke = await getChuckNorrisJoke()
        this.setState({
            ...this.state,
            currentJoke: joke,
            numJokesAcquired: this.state.numJokesAcquired+1
        })
    }
    render(){
        return (
            <div>
                <p> This is the Chuck Norris Joke Component</p>
                <p>You have gotten this many jokes: {this.state.numJokesAcquired}</p>
                <p>Current Joke</p>
                <p>{this.state.currentJoke}</p>
                <button onClick = {this.getNewJoke}>Get New Joke</button>
            </div>
        )
    }
}



