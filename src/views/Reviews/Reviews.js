export default function Reviews({ reviews }) {
  const { results } = reviews;

  return (
    <>
      {results && results.length ? (
        <ul>
          {results.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
}
