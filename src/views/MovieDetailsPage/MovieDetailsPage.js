import React from 'react';
import { useState, useEffect } from 'react';
import { Route, useParams, NavLink, useRouteMatch } from 'react-router-dom';
// import PageHeading from 'components/PageHeading/PageHeading';
import { fetchMovieByID } from '../../services/API';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieByID(movieId) {
      try {
        await fetchMovieByID(movieId).then(result => setMovie(result));
      } catch (error) {
        /* toast.error */ alert(
          'Error. We are sorry, but something went wrong.',
        );
        console.log(error);
      }
    }
    getMovieByID(movieId);
    console.log(movie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <hr />
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>
            {movie.title} (
            {movie.release_date
              ? movie.release_date.split('-')[0]
              : '2020-00-00'}
            )
          </h2>
          <p>User score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          <hr />
          <h5>Additional information</h5>
          <ul>
            <li key={movie.id}>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li /* key={movie.id} */>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </>
      )}
      <hr />

      <Route path={`${path}/:cast`}>
        {movie && <Cast movieId={movieId} />}
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}

export default MovieDetailsPage;
