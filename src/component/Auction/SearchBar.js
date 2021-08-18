const SearchBar = (props) => {
  return (<div>  

    <div className="fav2">Search</div>
     <input className="search" onChange={(event)  => props.setQuery(event.target.value)} />
     
     
     ;</div>

  )
  
};
export default SearchBar;
