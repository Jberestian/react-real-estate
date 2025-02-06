import { useState } from "react";
import "./searchBar.scss";

function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice:0,
    })
  return (
    <div className="searchBar">
      <div className="type">
        <button onClick={()=>}>Buy</button>
        <button>Rent</button>
      </div>
      <form action="">
        <input type="text" name="location" placeholder="city Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max price"
        />

        <button>
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
