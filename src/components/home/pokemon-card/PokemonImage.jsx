import React from 'react';

function PokemonImage({ src, alt }) {
  return <img src={src} alt={alt} className="mb-1" style={{ width: '70%', height: '70%' }} />;
}

export default PokemonImage;