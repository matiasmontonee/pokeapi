import React from 'react';
import { capitalizeFirstLetter } from '../../../helpers/formatHelpers';

function PokemonName({ name }) {
  return <strong style={{ fontSize: '1.6rem' }} className=" mb-2 text-gray-800">{capitalizeFirstLetter(name)}</strong>;
}

export default PokemonName;