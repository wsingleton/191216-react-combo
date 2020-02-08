import React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import IMovie from './data/IMovie.interface';


interface IProps {
    getMovies: Function,
    SetMovie: Function,
    searchMovies: Function,
    Movie: any,
    characters: IMovie[], 
    isFetching: Boolean
}

importimport MovieSearch from './MovieSearch';
 const MovieContainer: React.FunctionComponent<IProps>=({
    getMovies,
    setMovie,
    searchMovies,
    movies,
    isFetching
}) => {
    React.useEffect(()=>{
        getMovies();
    }, [getMovies]);

    return (
        <div className="movies-container">
          <NavigationBar>
            <MoviesSearch searchMovies={searchMovies} />
          </NavigationBar>
    
          { isFetching
            ? <Loader></Loader>
            : (
              <div className="row">
                <div className="col-sm">
                  <MovieList
                    movies={movies}
                    setMovie={setMovie} />
                </div>
    
                <div className="col-sm">
                  {movie
                    ? <Movie movie={movie} />
                    : <MovieMissing />}
                </div>
              </div>
            )
          }
        </div>
      );
    }

    const mapDispatchToProps = (dispatch: any) =>{
        return{
            getMovies: () => dispatch(getMoviesStartActonCreator()),
            setMovie: (movie: any) =>dispatch(setMovieActionCreator(movie)),
            searchMovies: (term: string) =>dispatch(searchMoviesActionCreator(term)),
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
    
