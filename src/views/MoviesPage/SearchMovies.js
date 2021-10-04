import { useState } from 'react';

export default function SearchMoviesByName({ onFormSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = event => {
    console.log(event.currentTarget.value);
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      // toast.error('Enter search query!');
      return;
    }
    onFormSubmit(searchQuery);
    setSearchQuery('');
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
        value={searchQuery}
        onChange={handleSearchQuery}
      />
    </form>
  );
}
