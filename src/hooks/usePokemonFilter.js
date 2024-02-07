import { useState, useEffect, useCallback } from 'react';

const usePokemonFilter = (initialData) => {
  const [filteredPokemons, setFilteredPokemons] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState(['all']);

  const updateFilteredPokemons = useCallback(() => {
    const searchTermLower = searchTerm.trim().toLowerCase();

    const filteredData = initialData.filter((pokemon) => {
      const nameMatch = pokemon.name.toLowerCase().includes(searchTermLower);
      const typeMatch =
        selectedTypes.includes('all') ||
        pokemon.types.some((type) => selectedTypes.includes(type.type.name));

      return nameMatch && typeMatch;
    });

    setFilteredPokemons(filteredData);
  }, [searchTerm, selectedTypes, initialData]);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleTypeToggle = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((selectedType) => selectedType !== type)
        : [type]
    );
  };

  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    updateFilteredPokemons();
  }, [searchTerm, selectedTypes, initialData, updateFilteredPokemons]);

  return {
    filteredPokemons,
    searchTerm,
    selectedTypes,
    handleSearchTermChange,
    handleTypeToggle,
    clearSearchTerm
  };
};

export default usePokemonFilter;