import React from 'react';
import PokemonImage from '../pokemon-card/PokemonImage';
import PokemonName from '../pokemon-card/PokemonName';
import PokemonTypes from '../pokemon-card/PokemonTypes';
import PokemonAbilities from '../pokemon-card/PokemonAbilities';
import PokemonDetailsButton from '../pokemon-card/PokemonDetailsButton';

function PokemonCard({ pokemon }) {
  return (
    <div className="border border-gray-150 rounded p-4 transition-transform hover:scale-105 flex flex-col items-center bg-gray-50 shadow-lg hover:shadow-2xl">
      <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
      <PokemonName name={pokemon.name} />
      <PokemonTypes types={pokemon.types} />
      <PokemonAbilities abilities={pokemon.abilities} />
      <PokemonDetailsButton pokemon={pokemon} />
    </div>
  );
}

export default PokemonCard;