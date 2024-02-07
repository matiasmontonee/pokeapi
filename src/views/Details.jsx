import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetails from '../components/details/pokemon-main/PokemonDetails';
import { usePokemonDetails } from '../hooks/router';
import '../assets/css/loader.css';

function Details() {
  const { name } = useParams();
  const { pokemonDetails, loadingDetails } = usePokemonDetails(name);

  return (
    <div>
      {loadingDetails ? (
        <div className="loader">
          <div className="box-load1"></div>
          <div className="box-load2"></div>
          <div className="box-load3"></div>
        </div>
      ) : (
        <PokemonDetails selectedPokemon={pokemonDetails} />
      )}
    </div>
  );
}

export default Details;