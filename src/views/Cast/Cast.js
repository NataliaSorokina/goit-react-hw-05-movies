export default function Cast({ credits }) {
  const { cast } = credits;
  // console.log(credits);
  // console.log(cast);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
