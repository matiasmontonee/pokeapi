import React from 'react';
import { Link } from 'react-router-dom';

function PokemonDetailsButton({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="no-underline">
      <button className="bg-gray-300 hover:bg-gray-400 text-black p-2.5 pr-4 pl-4 m-2 rounded-full">
        See Stats
      </button>
    </Link>
  );
}

export default PokemonDetailsButton;