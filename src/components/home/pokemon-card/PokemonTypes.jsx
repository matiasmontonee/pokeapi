import React from 'react';
import { capitalizeFirstLetter } from '../../../helpers/formatHelpers';
import { typeColors } from '../../../helpers/typeHelpers';

function PokemonTypes({ types }) {
  return (
    <p className="mb-2 text-lg">
      {types.map((type, index) => ( <span key={index} className={`text-${typeColors[type.type.name]}-500`}> <strong>{capitalizeFirstLetter(type.type.name)}</strong> {index < types.length - 1 && <strong className="text-black"> - </strong>} </span> ))}
    </p>
  );
}

export default PokemonTypes;