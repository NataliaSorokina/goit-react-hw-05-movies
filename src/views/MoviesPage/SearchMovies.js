import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchMoviesByName({ onFormSubmit }) {
  const [value, setValue] = useState('');

  const handleSearchQuery = event => {
    console.log(event.target.value);
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
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleSearchQuery}
      />
    </form>
  );
}
