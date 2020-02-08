import React from 'react';
import { getSearchResult } from '../../remote/searh-movies-client/show-movies-result';

interface IShowMovieState {
    image: string
    title: string
    year: string
}


export class ShowMovieComponent extends React.Component<any, IShowMovieState>{
    constructor(props: any) {
        super(props)
            this.state ={
                image: '',
                title: '',
                year: ''

            }
        
    }

    async componentDidMount(){
        let result = await getSearchResult()
        this.setState({
            ...this.state,
            image: 'poster',
            title: this.state.title + 'title: ',
            year: this.state.year + 'year: '
        })

    }

    getMovieResult = async () =>{
        let results= await getSearchResult()
        this.setState({
            ...this.state,
            image: 'poster',
            title: results + 'title',
            year: this.state.year + 'year'
        })
    }

    render(){
        return(
            <div>
                <img src={this.state.image}  />
                <h1>{this.getMovieResult}</h1>
                <h2>{this.state.year}</h2>
            </div>
        )
    }

}