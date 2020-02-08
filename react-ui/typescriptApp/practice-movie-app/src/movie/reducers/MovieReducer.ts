import { Reducer } from 'redux';

// Busines domain imports
import MovieActions from '../actions/MovieActions.type';
import MovieActionTypes from '../actions/MovieActionTypes.enum';
import IMovieState from '../data/IMovie.interface';

// Business logic
const initialMovieState: IMovieState = {
  movie: undefined,
  movies: [],
  isFetching: false,
};

const CharacterReducer: Reducer<IMovieState, MovieActions> = (
  state = initialMovieState,
  action
) => {
  switch (action.type) {
    case MovieActionTypes.MOVIE: {
      return {
        ...state,
        movie: action.movie,
      };
    }
    case MovieActionTypes.SEARCH_MOVIES: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case MovieActionTypes.GET_MOVIES_START: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case MovieActionTypes.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.movies,
        isFetching: action.isFetching,
      };
    }
    case MovieActionTypes.GET_CHARACTERS_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default MovieReducer;