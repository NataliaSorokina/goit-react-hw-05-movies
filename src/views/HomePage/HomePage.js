import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../../services/API';

function HomePage() {
  // const [day] = useState('day');
  const [popularMovies, setPopularMovie] = useState([]);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const data = await fetchPopularMovies();
        console.log(data);
        const [results] = data;
        setPopularMovie([...results]);
        console.log(popularMovies);
      } catch (error) {
        console.log(error);
      }
    }
    getPopularMovies();
  }, []);

  return (
    <>
      <ul>{popularMovies}</ul>
    </>
  );
}

export default HomePage;
