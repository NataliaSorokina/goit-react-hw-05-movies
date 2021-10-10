import { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchMovieByID } from '../../services/API';
import MovieInfo from '../MovieInfo/MovieInfo';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieByID(movieId)
      .then(result => setMovie(result))
      .catch(error => {
        toast.error('Error. We are sorry, but something went wrong.');
        console.log(error);
      });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      {movie && (
        <MovieInfo movie={movie} moviesLocation={location?.state?.from} />
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default MovieDetailsPage;
