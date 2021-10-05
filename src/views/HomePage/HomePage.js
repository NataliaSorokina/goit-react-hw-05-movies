import { useState, useEffect } from 'react';
import { Link /* , useRouteMatch */ } from 'react-router-dom';
// import PageHeading from 'components/PageHeading/PageHeading';
import { fetchPopularMovies } from '../../services/API';

function HomePage() {
  // const { url } = useRouteMatch();
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        const data = await fetchPopularMovies();
        console.log(data);
        const { results } = data;
        setPopularMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getPopularMovies();
  }, []);

  return (
    <>
      {/* <PageHeading text="Home" /> */}

      {popularMovies && (
        <ul>
          {popularMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
