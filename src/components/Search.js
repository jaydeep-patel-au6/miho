import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setQuery }) => {
  return (
    <div className="relative">
      <label></label>
      <input
        className="shadow h-12 appearance-none border mt-0 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
      />
      <FontAwesomeIcon
        icon={faSearch}
        color="black"
        className="opacity-75 absolute top-4 right-2"
      />
    </div>
  );
};

export default Search;
