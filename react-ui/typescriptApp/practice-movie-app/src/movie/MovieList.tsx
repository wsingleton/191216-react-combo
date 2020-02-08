import * as React from 'react';

import IMovie from './data/IMovie.interface';
import MovieListItem from './MovieListIem';

interface IProps {
    setMovie: Function,
    movies: IMovie[];
}

const MovieList: React.FunctionComponent<IProps>=({ movies, setMovie})=>{
    <ul className="list-group">
    {movies && movies.map(movie=>(
        <MovieListItem
        key={movie.Title}
        movie={movie}
        setMovie={setMovie} />


    ))}
    </ul>
}
export default MovieList;