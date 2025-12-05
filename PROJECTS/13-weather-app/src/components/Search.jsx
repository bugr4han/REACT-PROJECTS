import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ handleSearch }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search-container">
      <h1>WEATHER</h1>
      <div className="searchSection">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleSearch(searchInput)}
          placeholder="Enter a city name..."
        />
        <button onClick={() => searchInput && handleSearch(searchInput)}>
          <FaSearch /> Search
        </button>
      </div>
    </div>
  );
}

export default Search;
