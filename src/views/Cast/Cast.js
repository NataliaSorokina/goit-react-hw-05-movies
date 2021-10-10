import { List, ListImg, Desc, Title, Span } from './Cast.styled';
import { ListItem } from '../MoviesList/MoviesList.styled';
import default_image_cast_4 from '../../images/default_image_cast_4.jpg';

export default function Cast({ credits }) {
  const { cast } = credits;

  return (
    <>
      {cast && cast.length ? (
        <List>
          {cast.map(actor => (
            <ListItem key={actor.cast_id}>
              <ListImg
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : default_image_cast_4
                }
                alt={actor.name}
              />
              <Title>{actor.name}</Title>
              <Desc>
                <Span>Character: </Span>
                {actor.character ? actor.character : 'no data'}
              </Desc>
            </ListItem>
          ))}
        </List>
      ) : (
        <Title>No cast information</Title>
      )}
    </>
  );
}
