import { lazy, Suspense } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import default_image_poster_6 from '../../images/default_image_poster_6.jpg';

const Cast = lazy(() =>
  import('../Cast/Cast.js' /* webpackChunkName: "cast-view" */),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews.js' /* webpackChunkName: "reviews-view" */),
);

const MovieInfo = ({ movie, moviesLocation }) => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <hr />
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : default_image_poster_6
        }
        alt={movie.title}
      />
      <h2>
        {movie.title} (
        {movie.release_date
          ? movie.release_date.split('-')[0]
          : 'release date unknown'}
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
        <li key={movie.cast}>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: { from: moviesLocation ?? '/movies' },
            }}
          >
            Cast
          </Link>
          <Suspense fallback={<Loader />}>
            <Route path={`${path}/cast`}>
              <Cast credits={movie.credits} />
            </Route>
          </Suspense>
        </li>
        <li key={movie.reviews}>
          <Link
            to={{
              pathname: `${url}/reviews`,
              state: { from: moviesLocation ?? '/movies' },
            }}
          >
            Reviews
          </Link>
          <Suspense fallback={<Loader />}>
            <Route path={`${path}/reviews`}>
              <Reviews reviews={movie.reviews} />
            </Route>
          </Suspense>
        </li>
      </ul>
    </>
  );
};
export default MovieInfo;
