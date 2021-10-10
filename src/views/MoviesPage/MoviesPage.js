import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchMoviesByQuery } from '../../services/API';
import SearchMovies from './SearchMovies';
import MovieList from '../MoviesList/MoviesList';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [searchStatus, setSearchStatus] = useState('idle');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [total_pages, setTotal_pages] = useState(0);

  const changeQuery = new URLSearchParams(location.search).get('query');
  // console.log('changeQuery:', changeQuery);

  const handleFormSubmit = value => {
    setSearchQuery(value);
    setPage(1);
    setMovies([]);
    history.push({ ...location, search: `query=${value}` });
  };

  const handlePageIncrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!changeQuery) {
      return;
    } else {
      setSearchStatus('pending');
      fetchMoviesByQuery(changeQuery, page)
        .then(data => {
          if (data.results.length === 0) {
            toast.error(
              `Sorry, there are no movies matching your search query '${searchQuery}'. Please try again.`,
            );
            return;
          }
          if (data.total_pages === page) {
            toast('Sorry, but you have reached the end of search results.');
          }

          if (data.results) {
            return (
              setSearchStatus('resolved'),
              setMovies(prevState => [...prevState, ...data.results]),
              setTotal_pages(data.total_pages),
              handleScroll()
            );
          }
        })
        .catch(error => {
          setSearchStatus('rejected');
          toast.error('Error. We are sorry, but something went wrong.');
          console.log(error);
        });
    }
  }, [changeQuery, page, searchQuery]);

  const shouldRenderButton = total_pages > page && searchStatus !== 'pending';

  return (
    <>
      <SearchMovies onFormSubmit={handleFormSubmit} />
      {searchStatus === 'pending' && <Loader />}
      {movies && <MovieList movies={movies} />}
      {shouldRenderButton && <Button onClick={handlePageIncrement} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default MoviesPage;
