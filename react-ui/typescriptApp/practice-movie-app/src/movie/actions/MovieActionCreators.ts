import getMovieMock from '../data/GetMovieMock';
// import GetCharactersMock from '../data/GetCharactersMock';
import {
  setMovieActionCreator,
  searchMoviesActionCreator,
  getMoviesStartActionCreator,
  getMoviesSuccessActionCreator,
  getMoviesFailureActionCreator,
} from './movieActionCreators';
import movieActionTypes from './movieActionTypes.enum';

// Tests
describe('setmovie', () => {
  it('creates ISetmovieAction', () => {
    const action = setMovieActionCreator(GetMovieMock);

    expect(action).toEqual({
      type: movieActionTypes.SET_movie,
      movie: getMovieMock,
      isFetching: false,
    });
  });
});

describe('searchmovies', () => {
  it('creates ISearchmoviesAction', () => {
    const term = "Darth";
    const action = searchMoviesActionCreator(term);

    expect(action).toEqual({
      type: movieActionTypes.SEARCH_MOVIES,
      term,
      isFetching: true,
    });
  });
});

describe('getMoviesStart', () => {
  it('creates IGetMoviesStartAction', () => {
    const action = getMoviesStartActionCreator();

    expect(action).toEqual({
      type: MovieActionTypes.GET_MOVIES_START,
      isFetching: true,
    });
  });
});

describe('getMoviesSuccess', () => {
  it('creates IGetMoviesSuccessAction', () => {
    const action = getMoviesSuccessActionCreator(GetMoviesMock);

    expect(action).toEqual({
      type: MovieActionTypes.GET_MOVIESS_SUCCESS,
      movies: GetMoviesMock,
      isFetching: false,
    });
  });
});

describe('getMoviesFailure', () => {
  it('creates IGetMoviesFailureAction', () => {
    const action = getMoviesFailureActionCreator();

    expect(action).toEqual({
      type: MovieActionTypes.GET_CHARACTERS_FAILURE,
      isFetching: false,
    });
  });
});