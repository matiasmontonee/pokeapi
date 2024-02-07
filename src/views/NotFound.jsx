import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/imgs/banner.png';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={bannerImage} alt="Banner" className='w-1/3 h-1/3 mt-4' />
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Page not found</h1>
        <p className="mb-6">
          If you'd like to find some Legendary Pokemons {' '}
          <Link to="/" className="text-blue-500 underline">
            Click here!
          </Link>
        </p>
        <p>
          <Link to="/" className="bg-blue-500 hover:bg-blue-400 text-black p-2.5 pr-4 pl-4 m-2 rounded-full">
          Go back
        </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;