import {
    ISetMovieAction,
    ISearchMoviesAction,
    IGetMoviesStartAction,
    IGetMoviesSuccessAction,
    IGetMoviesFailureAction
  } from './IGetMoviesActions.interface';
  
  // Combine the action types with a union (we assume there are more)
  type MovieActions =
    ISetMovieAction
    | ISearchMoviesAction
    | IGetMoviesStartAction
    | IGetMoviesSuccessAction
    | IGetMoviesFailureAction;
  
  export default MovieActions;