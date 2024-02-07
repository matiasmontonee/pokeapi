import React from 'react';

function PokemonButtons({ onViewChange }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onViewChange('front')}
        className="flex-grow bg-gray-300 hover:bg-gray-400 p-0.5 rounded-b-xl "
      >
        Front
      </button>
      <button
        onClick={() => onViewChange('front_shiny')}
        className="flex-grow bg-gray-300 hover:bg-gray-400 p-0.5 rounded-b-xl"
      >
        Front Shiny
      </button>
      <button
        onClick={() => onViewChange('back')}
        className="flex-grow bg-gray-300 hover:bg-gray-400 p-0.5 rounded-b-xl"
      >
        Back
      </button>
      <button
        onClick={() => onViewChange('back_shiny')}
        className="flex-grow bg-gray-300 hover:bg-gray-400 p-0.5 rounded-b-xl"
      >
        Back Shiny
      </button>
    </div>
  );
}

export default PokemonButtons;