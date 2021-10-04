export default function SearchMoviesByName({
  onFormSubmit,
  searchQuery,
  onSearchQuery,
}) {
  return (
    <form onSubmit={onFormSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={onSearchQuery}
      />
    </form>
  );
}
