import React from 'react';
import ClearButton from './ClearButton';

function SearchBar({ searchTerm, onSearch, handleClear }) {
  const showClearButton = searchTerm.trim() !== '';

  const clearSearch = () => {
    handleClear(); 
  };

  return (
    <div className="relative w-full mx-auto">
      <input
        type="text"
        id="searchInput"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="border border-gray-400 p-2.5 rounded-full pr-10 w-full"
      />
      {showClearButton && <ClearButton onClear={clearSearch} />}
    </div>
  );
}

export default SearchBar;