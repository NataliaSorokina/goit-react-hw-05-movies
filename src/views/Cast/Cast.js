import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByID } from '../../services/API';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await fetchMovieByID(movieId);
        const { cast } = data.credits;
        setMovieCast(cast);
      } catch (error) {
        /* toast.error */ alert(
          'Error. We are sorry, but something went wrong.',
        );
        console.log(error);
        console.log(movieId);
      }
    }
    getMovieCast(movieId);
    console.log(movieCast);
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <ul>
          {movieCast.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
