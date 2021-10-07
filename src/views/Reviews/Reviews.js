import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByID } from '../../services/API';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
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
    getMovieReviews(movieId);
    console.log(movieReviews);
  }, [movieId]);

  return (
    <>
      {movieReviews && (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
