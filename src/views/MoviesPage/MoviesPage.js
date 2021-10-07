import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import PageHeading from 'components/PageHeading/PageHeading';
import { fetchMoviesByQuery } from '../../services/API';
import SearchMovies from './SearchMovies';

function MoviesPage() {
  const { url } = useRouteMatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setMovies([]);
  };

  useEffect(() => {
    async function getMovies() {
      try {
        if (searchQuery.trim() === '') {
          return;
        }
        const data = await fetchMoviesByQuery(searchQuery, page);
        const { results } = data;
        if (results.length === 0) {
          /* toast.error */ alert(
            `Sorry, there are no movies matching your search query '${searchQuery}'. Please try again.`,
          );
          return;
        }
        setMovies(results);
      } catch (error) {
        /* toast.error */ alert(
          'Error. We are sorry, but something went wrong.',
        );
        console.log(error);
      }
    }
    getMovies();
    //  console.log(movies);
  }, [searchQuery, page]);

  return (
    <>
      <SearchMovies onFormSubmit={handleFormSubmit} />

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
