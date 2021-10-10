import { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  Card,
  MovieCard,
  List,
  MovieImg,
  MinorTitle,
  ThirdTitle,
  FourthTitle,
  FifthTitle,
  Desc,
  Span,
  MovieLink,
  ListItem,
} from './MovieInfo.styled';
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
      <Card>
        <MovieImg
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : default_image_poster_6
          }
          alt={movie.title}
        />
        <MovieCard>
          <MinorTitle>
            {movie.title} (
            {movie.release_date
              ? movie.release_date.split('-')[0]
              : 'release date unknown'}
            )
          </MinorTitle>
          <Desc>
            <Span>User score:</Span> {movie.vote_average * 10}%
          </Desc>
          <ThirdTitle>{movie.overview ? 'Overview' : ''}</ThirdTitle>
          <Desc>{movie.overview ? movie.overview : 'No overview'}</Desc>
          <FourthTitle>Genres</FourthTitle>
          <Desc>{movie.genres.map(genre => genre.name).join(', ')}</Desc>
          <FifthTitle>Additional information</FifthTitle>
          <List>
            <ListItem key={movie.cast}>
              <MovieLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: moviesLocation ?? '/movies' },
                }}
              >
                Cast
              </MovieLink>
            </ListItem>
            <ListItem key={movie.reviews}>
              <MovieLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: moviesLocation ?? '/movies' },
                }}
              >
                Reviews
              </MovieLink>
            </ListItem>
          </List>
        </MovieCard>
      </Card>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast credits={movie.credits} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews reviews={movie.reviews} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
export default MovieInfo;
