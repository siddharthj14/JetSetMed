import React from 'react';
import search from "../../../public/Images/Icons/search.png";
import "./SearchInput.css"; 

const SearchInput = () => {
  return (
    <div className="search">
      <img src={search} alt="search icon" />
      <input type="text" placeholder="Search name or contact number" />
    </div>
  );
};

export default SearchInput;
