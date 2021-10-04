import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
import { fetchMoviesByQuery } from '../../services/API';
import SearchMovies from './SearchMovies';

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const handleSearchQuery = event => {
    console.log(event.currentTarget.value);
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setMovies([]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (event.currentTarget.value.trim() === '') {
      // toast.error('Enter search query!');
      return;
    }
    handleFormSubmit(searchQuery);
    setSearchQuery('');
  };

  useEffect(() => {
    async function getMovies() {
      try {
        if (searchQuery.trim() === '') {
          return;
        }
        const results = await fetchMoviesByQuery(searchQuery, page);
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
      <SearchMovies
        onFormSubmit={handleSubmit}
        searchQuery={searchQuery}
        onSearchQuery={handleSearchQuery}
      />
    </>
  );
}

export default MoviesPage;
