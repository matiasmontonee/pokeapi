import { useState, useEffect } from 'react';

const usePokemonData = () => {
  const [datos, setDatos] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const endPoint = 'https://pokeapi.co/api/v2/pokemon?limit=400&offset=0';

      try {
        const response = await fetch(endPoint);
        const json = await response.json();

        const detailedPokemonData = await Promise.all(json.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          const detailsJson = await detailsResponse.json();
          return detailsJson;
        }));

        setDatos(detailedPokemonData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingData(false); 
      }
    };

    fetchPokemonData();
  }, []);

  return { datos, loadingData };
};

export default usePokemonData;