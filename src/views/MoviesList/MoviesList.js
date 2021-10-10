import { useLocation } from 'react-router-dom';
import default_image_poster_6 from '../../images/default_image_poster_6.jpg';
import {
  List,
  ListItem,
  ListImg,
  MinorTitle,
  ListLink,
} from './MoviesList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    movies && (
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <ListLink
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <ListImg
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : default_image_poster_6
                }
                alt={movie.title}
              />
              <MinorTitle>
                {movie.title} (
                {movie.release_date
                  ? movie.release_date.split('-')[0]
                  : 'release date unknown'}
                )
              </MinorTitle>
            </ListLink>
          </ListItem>
        ))}
      </List>
    )
  );
};

export default MovieList;
