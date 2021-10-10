import default_image_cast_4 from '../../images/default_image_cast_4.jpg';

export default function Cast({ credits }) {
  const { cast } = credits;

  return (
    <>
      {cast && cast.length ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : default_image_cast_4
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character ? actor.character : 'no data'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information</p>
      )}
    </>
  );
}
