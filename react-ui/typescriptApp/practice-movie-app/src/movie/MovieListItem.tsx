import * as React from 'react';

import IMovie from './data/IMovie.interface';

interface IProps {
    movie: IMovie,
    setMovie: Function,
}

const MovieListItem: React.FunctionComponent<IProps> = ({ movie, setMovie}: IProps=>{
    const onClickHandler = (event: React.MouseEvent)=>{
        event.preventDefault();
        setMovie(movie);
    }
    return(
        <li
        key={Movie.Title}
        className="list-group-item"
        onClick={onClickHandler}
        ></li>
    );
};

export default MovieListItem;