import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const PokemonBaseExperience = ({ base_experience }) => {
  return (
    <div>
      <div className="flex items-center">
        <span className="mr-2"><FaTrophy /></span>
        <p>Base Experience: {base_experience}</p>
      </div>
    </div>
  );
};

export default PokemonBaseExperience;