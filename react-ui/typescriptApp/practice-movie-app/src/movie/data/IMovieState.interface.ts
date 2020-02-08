import IMovie from './IMovie.interface';

export default interface IMovieState {
  readonly Movie?: IMovie,
  readonly Movies: IMovie[],
  readonly isFetching: Boolean,
}