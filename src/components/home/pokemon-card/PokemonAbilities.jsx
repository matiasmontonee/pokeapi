import React from 'react';
import { capitalizeFirstLetterArray } from '../../../helpers/formatHelpers';

function PokemonAbilities({ abilities }) {
  return <p className="mb-2">{capitalizeFirstLetterArray(abilities.map(ability => ability.ability.name).join(', '))}</p>;
}

export default PokemonAbilities;