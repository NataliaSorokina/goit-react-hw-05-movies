import {
  List,
  ListItem,
  Title,
  MinorTitle,
  Desc,
  Span,
} from './Reviews.styled';

export default function Reviews({ reviews }) {
  const { results } = reviews;

  return (
    <>
      {results && results.length ? (
        <List>
          {results.map(review => (
            <ListItem key={review.id}>
              <Title>
                <Span>Author: </Span>
                {review.author}
              </Title>
              <Desc>{review.content}</Desc>
            </ListItem>
          ))}
        </List>
      ) : (
        <MinorTitle>No reviews</MinorTitle>
      )}
    </>
  );
}
