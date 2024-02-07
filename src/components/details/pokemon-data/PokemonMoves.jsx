import React from 'react';
import { capitalizeFirstLetter } from '../../../helpers/formatHelpers';
import { FaRunning } from 'react-icons/fa'; 

const PokemonMoves = ({ moves }) => {
  const moveNames = moves.slice(0, 3).map((move) => capitalizeFirstLetter(move.move.name));

  return (
    <div>
      <div className="flex items-center">
        <span className="mr-2"><FaRunning /></span>
        <p>Moves: {moveNames.join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonMoves;