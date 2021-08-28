const SearchBar = (props) => {
  return (<div>  

    <div className="fav2"></div>
     <input className="search" placeholder="Search" onChange={(event)  => props.setQuery(event.target.value)} />
     
     
     </div>

  )
  
}
export default SearchBar
