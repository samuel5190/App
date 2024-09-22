import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Search.css'; // Import the CSS file for styling

const Search = ({setSearchTerm,searchTerm}) => {
  // const [query, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert('Search for: ' + query); 
  };

  return (
    <>
        <div className="search-box">
          <input
            type="text"
            className="search-input"  // Added className
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>
    </>
  );
};

export default Search;
