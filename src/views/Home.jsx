import React, { useState } from 'react';
import Header from '../components/home/pokemon-header/Header';
import TypeButtons from '../components/home/pokemon-buttons/TypeButtons';
import PokemonCard from '../components/home/pokemon-main/PokemonCard';
import { usePokemonData, usePokemonFilter } from '../hooks/router';
import { availableTypes } from '../helpers/typeHelpers';
import '../assets/css/loader.css';

function Home() {
  const { datos, loadingData } = usePokemonData();
  const {
    filteredPokemons,
    searchTerm,
    selectedTypes,
    handleSearchTermChange,
    handleTypeToggle,
    clearSearchTerm
  } = usePokemonFilter(datos);

  const [visiblePokemons, setVisiblePokemons] = useState(48);

  const handleLoadMore = () => {
    setVisiblePokemons((prevVisible) => prevVisible + 48);
  };

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        onSearch={handleSearchTermChange}
        handleClear={clearSearchTerm}
      />
      <TypeButtons
        availableTypes={availableTypes}
        selectedTypes={selectedTypes}
        onTypeToggle={handleTypeToggle}
      />

      <main className="p-5">
        <section id="cards">
          {loadingData && (
            <div className="loader">
              <div className="box-load1"></div>
              <div className="box-load2"></div>
              <div className="box-load3"></div>
            </div>
          )}
          {!loadingData && (
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredPokemons.length > 0 ? (
                filteredPokemons.slice(0, visiblePokemons).map((pokemon) => (
                  <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))
              ) : (
                <p className='text-lg'>No Pokemons found :(</p>
              )}
            </div>
          )}
        </section>
        {!loadingData && visiblePokemons < filteredPokemons.length && (
          <div className="ml-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white p-2.5 pr-4 pl-4 m-2 rounded-full"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;