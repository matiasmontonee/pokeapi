import React, { useState } from 'react';
import PokemonImage from '../pokemon-images/PokemonImage';
import PokemonButtons from '../pokemon-images/PokemonButtons';
import PokemonBackButton from '../pokemon-header/PokemonBackButton';
import PokemonTitle from '../pokemon-header/PokemonTitle';
import PokemonMoves from '../pokemon-data/PokemonMoves';
import PokemonId from '../pokemon-data/PokemonId';
import PokemonType from '../pokemon-data/PokemonType';
import PokemonHeight from '../pokemon-data/PokemonHeight';
import PokemonWeight from '../pokemon-data/PokemonWeight';
import PokemonAbilities from '../pokemon-data/PokemonAbilities';
import PokemonBaseExperience from '../pokemon-data/PokemonBaseExperience';
import PokemonStats from '../pokemon-stats/PokemonStats';

function PokemonDetails({ selectedPokemon }) {
  const [view, setView] = useState('front'); 

  function getPokemonImageUrl(sprites, view) {
    switch (view) {
      case 'back':
        return sprites.back_default;
      case 'front_shiny':
        return sprites.front_shiny;
      case 'back_shiny':
        return sprites.back_shiny;
      default:
        return sprites.front_default;
    }
  }

  return (
    <div className="container mx-auto">
    <section id='details' className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-5">
      <div className="grid">
        <PokemonBackButton />
        <PokemonImage src={getPokemonImageUrl(selectedPokemon.sprites, view)} alt={selectedPokemon.name} />
        <PokemonButtons onViewChange={setView} />
      </div>
      <div className="grid">
        <PokemonTitle name={selectedPokemon.name} />
        <div className="border-b border-gray-300 mb-1.5 pb-1">
          <PokemonId id={selectedPokemon.id} />
        </div>
        <div className="border-b border-gray-300 mb-1.5 pb-1">
          <PokemonMoves moves={selectedPokemon.moves} />
        </div>
        <div className="border-b border-gray-300 mb-1.5 pb-1">
          <PokemonType types={selectedPokemon.types} />
        </div>
        <div className="border-b border-gray-300 mb-1.5 pb-1">
          <PokemonHeight height={selectedPokemon.height} />
        </div>
        <div className="border-b border-gray-300 mb-1.5 pb-1">
          <PokemonWeight weight={selectedPokemon.weight} />
        </div>
        <div className="border-b border-gray-300 mb-1.5 pb-1">
          <PokemonAbilities abilities={selectedPokemon.abilities} />
        </div>
        <div className="border-b border-gray-300 mb-1 pb-1">
          <PokemonBaseExperience base_experience={selectedPokemon.base_experience} />
        </div>
        <PokemonStats stats={selectedPokemon.stats} />
      </div>
    </section>
    </div>
  );
}

export default PokemonDetails;