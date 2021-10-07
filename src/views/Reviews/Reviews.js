import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Switch, Route } from 'react-router';
// import { useParams, NavLink, Route, useRouteMatch } from 'react-router-dom';
// import PageHeading from 'components/PageHeading/PageHeading';
import { fetchMovieByID } from '../../services/API';
// import { Link } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  // const movieId = 451048;

  useEffect(() => {
    async function getMovieReviews(movieId) {
      try {
        const data = await fetchMovieByID(movieId);
        const { results } = data.reviews;
        setMovieReviews(results);
      } catch (error) {
        /* toast.error */ alert(
          'Error. We are sorry, but something went wrong.',
        );
        console.log(error);
        console.log(movieId);
      }
    }
    getMovieReviews();
    console.log(movieReviews);
  }, [movieId]);

  return (
    <>
      {movieReviews && (
        <ul>
          {movieReviews.map(review => (
            <li /* key={movie.id} */>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
