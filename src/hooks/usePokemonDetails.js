import { useState, useEffect } from 'react';

const usePokemonDetails = (name) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonDetails(data);
        setLoadingDetails(false);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
        setLoadingDetails(false);
      }
    };

    if (name) {
      fetchPokemonDetails();
    }
  }, [name]);

  return { pokemonDetails, loadingDetails };
};

export default usePokemonDetails;