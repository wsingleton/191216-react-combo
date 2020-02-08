import * as React from 'react';

import IMovie from './data/IMovie.interface';

interface IProps {
    movie: IMovie
}

const Movie: React.FunctionComponent<IProps> =({ movie}: IProps)=>(
    <>
    <h2>{movie.Title}</h2>

    <table className="table">
    <thead>
      <tr>
        <th scope="col">Info</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">year</th>
        <td>{movie.Year}</td>
      </tr>
      <tr>
        <th scope="row">director</th>
        <td>{movie.Director}</td>
      </tr>
    </tbody>
  </table>
</>
)

export default Movie;