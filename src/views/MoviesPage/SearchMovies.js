import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, SearchBtn, Input } from './SearchMovies.styled';

export default function SearchMoviesByName({ onFormSubmit }) {
  const [value, setValue] = useState('');

  const handleSearchQuery = event => {
    setValue(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      toast.error('Enter search query!');
      return;
    }
    onFormSubmit(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchBtn type="submit">
        <span>Search</span>
      </SearchBtn>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleSearchQuery}
      />
    </Form>
  );
}
