import React from 'react';
import { FaWeightHanging } from 'react-icons/fa';

const PokemonWeight = ({ weight }) => {
  const weightInKilograms = (weight * 0.1).toFixed(1);
  const weightValue = weightInKilograms.replace(/\.0$/, '');

  return (
    <div>
      <div className="flex items-center">
        <span className="mr-2"><FaWeightHanging /></span>
        <p>Weight: {weightValue}kg</p>
      </div>
    </div>
  );
};

export default PokemonWeight;