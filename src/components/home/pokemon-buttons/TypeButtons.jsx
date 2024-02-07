import React, { useState } from 'react';
import { availableTypes, typeColors } from '../../../helpers/typeHelpers';
import { capitalizeFirstLetter } from '../../../helpers/formatHelpers';

function TypeButtons({ onTypeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('all'); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTypeToggle = (type) => {
    if (selectedType !== type) {
      setSelectedType(type);
      onTypeToggle(type);
    }

    setMenuOpen(false);
  };

  return (
    <section id='buttons'>

      {/* Botones en pantallas grandes */}
      <div className={`hidden md:flex justify-center flex-wrap mt-4 ${menuOpen ? 'hidden' : 'flex'}`}>
        {availableTypes.map((type) => (
          <button
            key={type}
            className={`rounded-l-2xl rounded-r-2xl mb-1 md:mb-0 ${selectedType === type ? 'bg-white text-black' : ''}`}
            style={{
              backgroundColor: typeColors[type],
              padding: '4px',
              marginRight: '1%',
              marginBottom: '1%',
              color: ['all', 'fighting', 'rock', 'ice', 'fairy'].includes(type) ? 'black' : 'white',
              width: 'calc(8% - 0.5%)',
              flex: '0 0 calc(9% - 0.5%)',
              position: 'relative',
            }}
            onClick={() => handleTypeToggle(type)}
          >
            {capitalizeFirstLetter(type)}
            {selectedType === type && (
              <span
                className="md:hidden lg:block absolute top-2 right-1 h-2 w-2 bg-white rounded-full"
                style={{ marginTop: '4px', marginRight: '4px' }}
              ></span>
            )}
          </button>
        ))}
      </div>

      {/* Botones para pantallas móviles */}
      <div className="md:hidden mt-4 mr-9 ml-9">
        <button
          className="bg-gray-800 p-2 pl-3 pr-3 rounded-md text-white"
          onClick={toggleMenu}
        >
          <span className="material-icons text-2xl">
            {menuOpen ? 'clear' : 'filter_list'}
          </span>
        </button>
        {menuOpen && (
          <div className="flex flex-col mt-2">
            {availableTypes.map((type) => (
              <button
                key={type}
                className={`rounded-l-2xl rounded-r-2xl mb-1 ${selectedType === type ? 'bg-white text-black' : ''}`}
                style={{
                  backgroundColor: typeColors[type],
                  padding: '4px',
                  marginRight: '1%',
                  color: ['all', 'fighting', 'rock', 'ice', 'fairy'].includes(type) ? 'black' : 'white',
                  flexGrow: '1',
                  position: 'relative',
                }}
                onClick={() => handleTypeToggle(type)}
              >
                {capitalizeFirstLetter(type)}
                {selectedType === type && (
                  <span
                    className="absolute top-1.5 right-0 h-3 w-3 bg-white rounded-full"
                    style={{ marginTop: '4px', marginRight: '4px' }}
                  ></span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TypeButtons;
