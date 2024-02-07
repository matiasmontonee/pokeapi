import React from 'react';
import { capitalizeFirstLetter } from '../../../helpers/formatHelpers';
import { typeColors } from '../../../helpers/typeHelpers';
import { FaMagic } from 'react-icons/fa';

const PokemonType = ({ types }) => {
  return (
    <div>
      <p>
        <FaMagic className="inline-block mr-1" /> 
        Types: {types.map((type, index) => (
          <span key={index} className={`text-${typeColors[type.type.name]}-500`}>
            <strong>{capitalizeFirstLetter(type.type.name)}</strong>
            {index < types.length - 1 && <strong className="text-black"> - </strong>}
          </span>
        ))}
      </p>
    </div>
  );
};

export default PokemonType;