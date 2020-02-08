import IMovie from '../data/IMovie.interface';
import MovieActionTypes from './MovieActionTypes.enum';

export interface ISetMovieAction {
  type: MovieActionTypes.SET_MOVIE,
  character: IMovie,
  isFetching: false,
}

export interface ISearchMoviesAction {
  type: MovieActionTypes.SEARCH_MOVIES,
  term: string,
  isFetching: true,
}

export interface IGetMoviesStartAction {
  type: MovieActionTypes.GET_MOVIES_START,
  isFetching: true,
}
export interface IGetMoviesSuccessAction {
  type: MovieActionTypes.GET_MOVIES_SUCCESS,
  characters: IMovie[],
  isFetching: false,
}
export interface IGetMoviesFailureAction {
  type: MovieActionTypes.GET_MOVIES_FAILURE,
  isFetching: false,
}