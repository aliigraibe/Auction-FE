const SearchBar = (props) => {
  return <input onChange={(event) => props.setQuery(event.target.value)} />;
};
export default SearchBar;
