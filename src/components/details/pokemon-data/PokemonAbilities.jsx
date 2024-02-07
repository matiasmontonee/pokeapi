import React from 'react';
import { capitalizeFirstLetterArray } from '../../../helpers/formatHelpers'; 
import { FaBolt } from 'react-icons/fa'; 

const PokemonAbilities = ({ abilities }) => {
  const formattedAbilities = capitalizeFirstLetterArray(abilities.map(ability => ability.ability.name).join(', '));

  return (
    <div>
      <div className="flex items-center">
        <span className="mr-2"><FaBolt /></span>
        <p>Abilities: {formattedAbilities}</p>
      </div>
    </div>
  );
};

export default PokemonAbilities;