import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Using useState directly

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        className="searchBar"
        onChange={handleChange}
        type="search"
        placeholder="Search your voice...."
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;