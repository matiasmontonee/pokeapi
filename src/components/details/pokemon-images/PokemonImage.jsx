import React from 'react';

function PokemonImage({ src, alt }) {
  return (
    <div className="border rounded-t-xl border-b-0 border-gray-300">
      <img src={src} alt={alt} className="w-2/3 h-full mx-auto"/>
    </div>
  );
}

export default PokemonImage;