import React from 'react';
import { Link } from 'react-router-dom';

function PokemonBackButton() {
  return (
    <div>
      <Link to="/" >
        <button className="bg-gray-300 hover:bg-gray-400 p-2 pr-6 pl-6 rounded-full mb-5">
          Return
        </button>
      </Link>
    </div>
  );
}

export default PokemonBackButton;