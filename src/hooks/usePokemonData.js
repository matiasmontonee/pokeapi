import { useState, useEffect } from 'react';

const usePokemonData = () => {
  const [datos, setDatos] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const endPoint = 'https://pokeapi.co/api/v2/pokemon?limit=400&offset=0';

      try {
        const response = await fetch(endPoint);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        if (!json || !json.results) {
          throw new Error('Invalid JSON response');
        }

        const detailedPokemonData = await Promise.all(
          json.results.map(async (pokemon) => {
            try {
              const detailsResponse = await fetch(pokemon.url);

              if (!detailsResponse.ok) {
                throw new Error(`HTTP error! status: ${detailsResponse.status}`);
              }

              const detailsJson = await detailsResponse.json();
              return detailsJson;
            } catch (error) {
              console.error('Error fetching Pokemon details:', error);
              return null;
            }
          })
        );

        setDatos(detailedPokemonData.filter(pokemon => pokemon !== null));
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchPokemonData();
  }, []);

  return { datos, loadingData };
};

export default usePokemonData;
