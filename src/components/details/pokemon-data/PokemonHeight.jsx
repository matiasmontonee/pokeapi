import React from 'react';
import { FaRulerVertical } from 'react-icons/fa';

const PokemonHeight = ({ height }) => {
  const heightInMeters = (height * 0.1).toFixed(1);
  const heightValue = heightInMeters.replace(/\.0$/, '');

  return (
    <div>
      <div className="flex items-center">
        <span className="mr-2"><FaRulerVertical /></span>
        <p>Height: {heightValue}m</p>
      </div>
    </div>
  );
};

export default PokemonHeight;