import React from 'react';
import bannerImage from '../../../assets/imgs/banner.png';
import SearchBar from './SearchBar';

function Header({ searchTerm, onSearch, handleClear }) {
  return (
    <header className="p-5 text-center flex flex-col items-center">
      <img src={bannerImage} className="banner" alt="banner pokemon" />
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} handleClear={handleClear} />
    </header>
  );
}

export default Header;