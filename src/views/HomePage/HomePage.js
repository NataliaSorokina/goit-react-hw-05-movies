import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import PageHeading from 'components/PageHeading/PageHeading';
import { fetchPopularMovies } from '../../services/API';
import MovieList from '../MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

function HomePage() {
  const [trendStatus, setTrendStatus] = useState('idle');
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    setTrendStatus('pending');
    fetchPopularMovies()
      .then(data => {
        setTrendStatus('resolved');
        setPopularMovies(data.results);
      })
      .catch(error => {
        setTrendStatus('rejected');
        toast.error('Error. We are sorry, but something went wrong.');
        console.log(error);
      });
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {trendStatus === 'pending' && <Loader />}
      {popularMovies && <MovieList movies={popularMovies} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default HomePage;
