import React, { useState } from 'react';

interface IProps{
    searchMovies: Function,
}

const MovieSearch: React.FunctionComponent<IProps> = ({ searchMovies }: IProps)=>{
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeHandler = (event: React.ChangeEvent)=>{
        const input = (event.target as HTMLInputElement).value;
        setSearchTerm(input);
    }

    const onSubmitHandler =(event: React.FormEvent) =>{
        event.preventDefault();
    }

    return(
        <form
        className = "form-inline"
        onSubmit={onSubmitHandler}
            >
            <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={onChangeHandler}
            />
            <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            >Search</button>
            </form>

    )
}


export default MovieSearch;