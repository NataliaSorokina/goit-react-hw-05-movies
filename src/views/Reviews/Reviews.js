export default function Reviews({ reviews }) {
  const { results } = reviews;
  // console.log(reviews);
  // console.log(results);

  return (
    <>
      {results && (
        <ul>
          {results.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
