import "./searchBar.scss";

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="type"></div>
      <form action="">
        <input type="text" name="location" placeholder="city Location" />
        <input type="number" name="minPrice" placeholder="Min price" />
        <input type="number" name="maxPrice" placeholder="Max price" />
      </form>
    </div>
  );
}

export default SearchBar;
