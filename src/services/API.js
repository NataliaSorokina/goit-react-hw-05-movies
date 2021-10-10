import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'b52f90fd30b1aa860fd73efbdf6c3594',
};

export const fetchPopularMovies = async () => {
  return await axios.get('trending/movie/day').then(response => response.data);
};

export const fetchMoviesByQuery = async (searchQuery, page) => {
  return await axios
    .get('search/movie', {
      params: { query: searchQuery, page },
    })
    .then(response => response.data);
};

export const fetchMovieByID = async movie_id => {
  return await axios
    .get(`movie/${movie_id}?append_to_response=credits,reviews`)
    .then(response => response.data);
};
