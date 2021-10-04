import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../../services/API';

function HomePage() {
  // const [day] = useState('day');
  const [popularMovies, setPopularMovie] = useState([]);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const data = await fetchPopularMovies();
        const [results] = data;
        setPopularMovie([...results]);
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
