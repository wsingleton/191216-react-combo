import React from 'react';
import { getMovie } from '../../remote/movies-api-client/movies-api';

interface IMoviesState {  
    currentMovie: string
    
}

export class MoviesComponent extends React.Component<any, IMoviesState>{
    constructor(props: any){
        super(props)
        this.state={
            currentMovie: 'This is a movie'
        }
    }


    async componentDidMount(){
        let movie = await getMovie()
        this.setState({
            ...this.state,
            currentMovie: movie
        })
    }

    getMovie = async ()=>{
        let movie = await getMovie()
        this.setState({
            ...this.state,
            currentMovie: movie
        })
    }

    render(){
        return(
            <div>
                <p>This is the movie api Component Test</p>
                <p>You have gotten this movie:</p>
                 <img src={this.state.currentMovie}/>
            </div>
        )
    }
}