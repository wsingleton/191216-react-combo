import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?apikey=45c8ca64';

export const searchMoviesFromApi = (movie: String): Promise<any>=>{
    return axios.get(`${baseUrl}&t=${movie}`);
}