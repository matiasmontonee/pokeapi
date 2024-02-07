import React from 'react';
import { capitalizeFirstLetter } from '../../../helpers/formatHelpers';

function PokemonTitle({ name }) {
  const capitalizedTitle = capitalizeFirstLetter(name);

  return (
    <h1 className="text-2xl font-bold text-center mb-6">{capitalizedTitle} Stats</h1>
  );
}

export default PokemonTitle;