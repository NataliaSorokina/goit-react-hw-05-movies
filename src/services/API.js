import axios from 'axios';
// import PropTypes from 'prop-types';

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

// export const fetchMovieByID = async (movie_id) => {
//   return await axios
//     .get(`movie/${movie_id}`)
//     .then(response => response.data);
// };

// Movie by ID
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=22624965-297697bc75a5089bebc4e5f11&language=en-US

// export const fetchMovieCast = async (movie_id) => {
//   return await axios
//     .get(`movie/${movie_id}/credits`)
//     .then(response => response.data);
// };
// Credits (Cast)
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=22624965-297697bc75a5089bebc4e5f11&language=en-US

// export const fetchMovieReviews = async (movie_id) => {
//   return await axios
//     .get(`movie/${movie_id}/reviews`)
//     .then(response => response.data);
// };
// Reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=22624965-297697bc75a5089bebc4e5f11&language=en-US&page=1
