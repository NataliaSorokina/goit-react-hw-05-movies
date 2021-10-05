import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from 'components/PageHeading/PageHeading';
import { fetchMovieByID } from '../../services/API';

function MovieDetailsPage() {
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
          <h5>Additional information</h5>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
