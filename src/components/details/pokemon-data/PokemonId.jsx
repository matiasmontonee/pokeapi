import React from 'react';
import { FaIdBadge } from 'react-icons/fa';

const PokemonId = ({ id }) => {
  return (
    <div>
      <p>
        <FaIdBadge className="inline-block mr-1" />
        ID: {id}
      </p>
    </div>
  );
};

export default PokemonId;